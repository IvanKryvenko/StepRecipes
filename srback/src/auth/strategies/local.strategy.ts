import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { GetUserDto } from 'src/user/dto/get-user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<GetUserDto> {
        const user = await this.authService.validateUser(username, password);

        if (!user) {
            console.log('err');
            throw new UnauthorizedException();
        }

        return user;
    }
}
