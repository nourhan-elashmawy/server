import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from './services/quiz.service';
import { CreateQuizDto } from './create-quiz.dto';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { RolesGuard } from 'src/shared/guards/roles.guard';
import { Role } from 'src/shared/constants/role.enum';
import { JwtAuthGuard } from 'src/shared/guards/jwt.auth.guard';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Quiz } from './quiz.entity';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('/')
  async getAllQuiz(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(2), ParseIntPipe) limit: number,
  ): Promise<Pagination<Quiz>> {
    const options: IPaginationOptions = {
      limit,
      page,
    };
    return await this.quizService.paginate(options);
  }

  @Post('/create')
  @ApiCreatedResponse()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    await this.quizService.createQuiz(quizData);
    return { quizData };
  }

  @Get('/:id')
  @ApiOkResponse()
  async getQuizById(@Param('id', ParseIntPipe) id: number) {
    return await this.quizService.getQuizById(id);
  }

  @Post('/delete/:id')
  @ApiOkResponse()
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  async deleteQuiz(@Param('id') id: number) {
    return await this.quizService.deleteQuiz(id);
  }
}
