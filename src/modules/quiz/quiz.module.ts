import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { Quiz } from './quiz.entity';
import { QuizService } from '../services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from '../question/question.controller';
import { QuestionService } from '../question/question.service';
import { Question } from '../question/question.entity';
import { OptionService } from '../option/option.service';
import { OptionController } from '../option/option.controller';
import { Option } from '../option/option.entity';

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option])],
  providers: [QuizService, QuestionService, OptionService],
  exports: [QuizService],
})
export class QuizModule {}
