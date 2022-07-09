import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { JwtService } from '@nestjs/jwt';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UserService {
    salt = 12;

    constructor(
        @InjectModel('User') private userModel: Model<UserDocument>,
        private readonly jwtService: JwtService,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<any> {
        try {
            if (
                (
                    await this.userModel.find({
                        nickname: createUserDto.username,
                    })
                ).length > 0
            ) {
                return {
                    message: 'User with such nickname already exist',
                };
            } else if (
                (
                    await this.userModel.find({
                        emailAddress: createUserDto.emailAddress,
                    })
                ).length > 0
            ) {
                return {
                    message: 'User with such email already exist',
                };
            }

            let userId = `user:${uuidv4()}`;

            while (!(await this.userModel.find({ id: userId }))) {
                console.log('there');
                userId = `user:${uuidv4()}`;
            }

            const hashedPassword = await bcrypt.hash(
                createUserDto.password,
                this.salt,
            );

            createUserDto.password = hashedPassword;
            createUserDto.id = userId;

            const createdUser = await new this.userModel(createUserDto).save();

            const payload = {
                sub: createdUser.id,
                fullName: createdUser.fullName,
                username: createdUser.username,
                email: createdUser.emailAddress,
                imageUrl: createdUser.imageUrl,
            };

            return {
                access_token: this.jwtService.sign(payload),
            };
        } catch (err) {
            throw new Error(err);
        }
    }

    async getUserData(id: string): Promise<GetUserDto> {
        const user = await this.userModel.findOne({ id: id });

        const userData = {
            id,
            username: user.username,
            emailAddress: user.emailAddress,
            imageUrl: user.imageUrl,
            fullName: user.fullName,
        };

        return userData;
    }

    // findAll() {
    //     return `This action returns all user`;
    // }

    async findOne(nickname: string): Promise<User> {
        return await this.userModel.findOne({ nickname: nickname });
    }

    // update(id: number, updateUserDto: UpdateUserDto) {
    //     return `This action updates a #${id} user`;
    // }

    // remove(id: number) {
    //     return `This action removes a #${id} user`;
    // }
}
