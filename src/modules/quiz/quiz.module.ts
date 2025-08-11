import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from '../question/question.controller';
import { QuestionService } from '../question/question.service';
import { Question } from '../question/question.entity';
import { OptionService } from '../option/option.service';
import { OptionController } from '../option/option.controller';
import { Option } from '../option/option.entity';
import { ResponseController } from '../response/response.controller';
import { ResponseService } from '../response/response.service';

@Module({
  controllers: [
    QuizController,
    QuestionController,
    OptionController,
    ResponseController,
  ],
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option])],
  providers: [QuizService, QuestionService, OptionService, ResponseService],
  exports: [QuizService],
})
export class QuizModule {}
