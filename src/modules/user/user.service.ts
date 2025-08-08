import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async registerUser(userData: CreateUserDto) {
    const user = this.userRepository.create(userData);
    return await this.userRepository.save(user);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getAdmins(): Promise<User[]> {
    return await this.userRepository.find({ where: { role: 'admin' } });
  }

  async makeAdmin(userId: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }
    user.role = 'admin';
    return await this.userRepository.save(user);
  }
}
