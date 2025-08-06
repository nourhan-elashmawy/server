import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { QuizModule } from './modules/quiz/quiz.module';
// import { CreateQuizDto } from './modules/quiz/dto/CreateQuiz.dto';
// import { QuizService } from './modules/quiz/quiz.service';

@Controller() // handles most routes
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  // dependency injection
  constructor(private readonly appService: AppService) {}

  @Get('/something')
  getSomething(): string {
    return this.appService.getSomething();
  }

  // @Post('/create')
  // createQuiz(@Body() quizdata: CreateQuizDto): string {
  //   return this.QuizService.createQuiz(quizdata);
}
