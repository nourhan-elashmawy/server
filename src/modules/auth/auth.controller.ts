import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { LocalAuthGuard } from '../../shared/guards/local.auth.guard';
import { AuthService } from './auth.service';
import { User } from '../user/user.entity';
import { JwtAuthGuard } from '../../shared/guards/jwt.auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req: { user: User }): { access_token: string } {
    return this.authService.generateToken(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/user')
  getUser(@Request() req: { user: User }): User {
    return req.user;
  }
}
