import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { Quiz } from './entities/quiz.entity';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
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
