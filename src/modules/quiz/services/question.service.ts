import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../question.entity';
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
    const quiz = await this.quizRepository.findOne({
      where: { id: questionData.quizid },
    });
    if (!quiz) {
      throw new Error('Quiz not found');
    }
    return await this.questionRepository.save({ ...questionData, quiz });
  }
}
