import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [QuizController],
  imports: [TypeOrmModule.forFeature([Quiz])],
  providers: [QuizService],
})
export class QuizModule {}
