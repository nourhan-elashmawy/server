import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'Title is required' })
  @Length(3, 255, { message: 'Title must be between 3 and 255 characters' })
  title: string;
  @IsNotEmpty({ message: 'Description is required' })
  @Length(3, 500, {
    message: 'Description must be between 3 and 500 characters',
  })
  description: string;
  // questions: Array<{
  //   question: string;
  // }>;
}
