import {
  Body,
  Controller,
  UsePipes,
  ValidationPipe,
  Post,
  Get,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  @ApiCreatedResponse({
    description: 'Created user object as response',
    type: User,
  })
  @ApiBadRequestResponse({
    description: 'User cannot + reason for failure.',
  })
  @UsePipes(ValidationPipe)
  async registerUser(@Body() userData: CreateUserDto) {
    const user = await this.userService.registerUser(userData);
    return { user };
  }

  @Get('/admins')
  async getAdmins() {
    const admins = await this.userService.getAdmins();
    return { admins };
  }

  @Post('/make-admin/:id')
  async makeAdmin(@Param('id') userId: number) {
    const updatedUser = await this.userService.makeAdmin(userId);
    return { user: updatedUser };
  }
}
