import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Quiz } from '../quiz/quiz.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from '../quiz/create-quiz.dto';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
  ) {}

  async createQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }

  // async getAllQuiz() {
  //   return await this.quizRepository
  //     .createQueryBuilder('q')
  //     .leftJoinAndSelect('q.questions', 'qt')
  //     .getMany();
  // }

  async paginate(options: IPaginationOptions): Promise<Pagination<Quiz>> {
    const qb = this.quizRepository
      .createQueryBuilder('q')
      .orderBy('q.id', 'ASC');

    return paginate<Quiz>(qb, options);
  }

  async getActiveQuiz() {
    return await this.quizRepository.find({ where: { isActive: true } });
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOneOrFail({ where: { id } });
  }

  async deleteQuiz(id: number) {
    return await this.quizRepository.update(id, { isActive: false });
  }
}
