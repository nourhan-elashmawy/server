import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('/')
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    await this.quizService.createQuiz(quizData);
    return { quizData };
  }

  @Get('/:id')
  async getQuizById(@Param('id') id: number) {
    return await this.quizService.getQuizById(id);
  }

  @Post('/delete/:id')
  async deleteQuiz(@Param('id') id: number) {
    return await this.quizService.deleteQuiz(id);
  }
}
