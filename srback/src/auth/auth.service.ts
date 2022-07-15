import { Injectable } from '@nestjs/common';
import { GetUserDto } from 'src/user/dto/get-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService,
    ) {}

    async validateUser(
        username: string,
        password: string,
    ): Promise<GetUserDto> {
        try {
            const user = await this.userService.findOne(username);

            const isMatch = await bcrypt.compare(password, user.password);

            if (user && isMatch) {
                const { password, ...result } = user;
                return result;
            }

            return null;
        } catch (err) {
            throw new Error(err);
        }
    }

    async login(username: any) {
        try {
            const user = await this.userService.findOne(username);
        
            const payload = {
                username: user.username,
                fullName: user.fullName,
                sub: user.id,
                email: user.emailAddress,
                imageUrl: user.imageUrl,
            };

            return {
                access_token: this.jwtService.sign(payload),
            };
        } catch (err) {
            throw new Error(err);
        }  
    }
}
