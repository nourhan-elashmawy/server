import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionService } from './question.service';

@Controller('quiz/question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createQuestion(@Body() questionData: CreateQuestionDto) {
    await this.questionService.createQuestion(questionData);
    return { questionData };
  }
}
