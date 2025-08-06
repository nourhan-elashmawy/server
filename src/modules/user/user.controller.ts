import {
  Body,
  Controller,
  UsePipes,
  ValidationPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async registerUser(@Body() userData: CreateUserDto) {
    const user = await this.userService.registerUser(userData);
    return { user };
  }
}
