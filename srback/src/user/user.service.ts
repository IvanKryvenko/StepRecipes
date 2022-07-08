import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    salt = 12;

    constructor(
        @InjectModel('User') private userModel: Model<UserDocument>,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<any> {
        try {
            if ((await this.userModel.find({ nickname: createUserDto.username })).length > 0) {
                return { 
                    'message': 'User with such nickname already exist'
                }
            } else if ((await this.userModel.find({ emailAddress: createUserDto.emailAddress })).length > 0) {
                return { 
                    'message': 'User with such email already exist'
                }
            }

            const hashedPassword = await bcrypt.hash(createUserDto.password, this.salt);

            createUserDto.password = hashedPassword;

            const createdUser = new this.userModel(createUserDto);
            
            return createdUser.save();
        } catch (err) {
            throw new Error(err);
        }
    }

    // findAll() {
    //     return `This action returns all user`;
    // }

    async findOne(nickname: string): Promise<User> {
        return await this.userModel.findOne({nickname: nickname});
    }

    // update(id: number, updateUserDto: UpdateUserDto) {
    //     return `This action updates a #${id} user`;
    // }

    // remove(id: number) {
    //     return `This action removes a #${id} user`;
    // }
}
