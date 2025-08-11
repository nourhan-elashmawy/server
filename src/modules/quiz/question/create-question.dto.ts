import { IsNotEmpty, Length } from 'class-validator';
import { ReferenceExists } from 'src/shared/decorators/reference-exists.decorator';

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'Question is required' })
  @Length(3, 255, { message: 'question must be between 3 and 255 characters' })
  question: string;

  @IsNotEmpty({ message: 'quizid is required' })
  @ReferenceExists(
    { entity: 'Quiz' },
    { message: 'This reference does not exist.' },
  )
  quizid: number;
}
