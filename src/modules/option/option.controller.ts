import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OptionService } from './option.service';
import { QuestionService } from '../question/question.service';
import { CreateOptionDto } from './create-option.dto';

@Controller('question/option')
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createOption(@Body() optionData: CreateOptionDto) {
    const option = await this.optionService.createOption(optionData);
    return { option };
  }
}
