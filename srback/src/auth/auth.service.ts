import { Injectable } from '@nestjs/common';
import { GetUserDto } from 'src/user/dto/get-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService
  ) {}
  
  async validateUser(username: string, password: string): Promise<GetUserDto> {
    const user = await this.userService.findOne(username);

    const isMatch = await bcrypt.compare(password, user.password);

    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(username: any) {
    const user = await this.userService.findOne(username);
    console.log(user);
    const payload = { 
      username: user.username,
      fullName: user.fullName, 
      sub: user._id, 
      email: user.emailAddress,
      imageUrl: user.imageUrl 
    }

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
