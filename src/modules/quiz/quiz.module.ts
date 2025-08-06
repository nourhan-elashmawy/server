import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { Question } from './question.entity';

@Module({
  controllers: [QuizController, QuestionController],
  imports: [
    TypeOrmModule.forFeature([Quiz]),
    TypeOrmModule.forFeature([Question]),
  ],
  providers: [QuizService, QuestionService],
  exports: [QuizService],
})
export class QuizModule {}
