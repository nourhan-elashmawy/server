import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Quiz } from './quiz.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
  ) {}

  async createQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }

  async getAllQuiz() {
    return await this.quizRepository.find({ where: { isActive: true } });
  }

  async getQuizById(id: number) {
    return await this.quizRepository.findOne({ where: { id } });
  }

  async deleteQuiz(id: number) {
    return await this.quizRepository.update(id, { isActive: false });
  }
}
