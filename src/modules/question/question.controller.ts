import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from './create-question.dto';
import { QuestionService } from './question.service';
import { QuizService } from '../quiz/quiz.service';

@Controller('quiz/question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createQuestion(@Body() questionData: CreateQuestionDto) {
    const question = await this.questionService.createQuestion(questionData);
    return { question };
  }

  @Get('/all')
  async getAllQuestion() {
    return await this.questionService.getAllQuestion();
  }
}
