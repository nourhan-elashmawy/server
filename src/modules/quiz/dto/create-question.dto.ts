import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'Question is required' })
  @Length(3, 255, { message: 'question must be between 3 and 255 characters' })
  question: string;
}
