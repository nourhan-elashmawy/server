import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../entities/question.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
  ) {}

  async createQuestion(questionData: CreateQuestionDto) {
    // const quiz = await this.quizRepository.findOne({
    //   where: { id: questionData.quizid },
    // });

    return await this.questionRepository.save({ ...questionData });
  }

  async getAllQuestion() {
    return await this.questionRepository
      .createQueryBuilder('qt')
      .leftJoinAndSelect('qt.options', 'o')
      .getMany();
  }
}
