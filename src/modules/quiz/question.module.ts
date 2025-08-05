import { Module } from '@nestjs/common';
import { Question } from './question.entity';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionService } from './question.service';

@Module({
  controllers: [QuestionController],
  imports: [TypeOrmModule.forFeature([Question])],
  providers: [QuestionService],
  exports: [QuestionService],
})
export class QuestionModule {}
