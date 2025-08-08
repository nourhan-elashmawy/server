import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUserCredentials(email: string, password: string) {
    const user = await this.userService.getUserByEmail(email);

    if (!user) return null;
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;
    return user;
  }

  generateToken(user: User) {
    return {
      access_token: this.jwtService.sign({
        name: user.name,
        sub: user.id,
        email: user.email,
        role: user.role,
      }),
    };
  }
}
