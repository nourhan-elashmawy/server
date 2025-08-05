import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from './question.module';

@Module({
  controllers: [QuizController],
  imports: [TypeOrmModule.forFeature([Quiz]), QuestionModule],
  providers: [QuizService],
  exports: [QuizService],
})
export class QuizModule {}
