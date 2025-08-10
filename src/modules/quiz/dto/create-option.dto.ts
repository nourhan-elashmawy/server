import { IsBoolean, IsNotEmpty, Length } from 'class-validator';
import { ReferenceExists } from 'src/shared/decorators/reference-exists.decorator';

export class CreateOptionDto {
  @IsNotEmpty({ message: 'Option text is required' })
  @Length(2, 255, { message: 'option must be between 2 and 255 characters' })
  text: string;

  @IsNotEmpty({ message: 'You should provide if the option is true or false' })
  @IsBoolean({ message: 'isCorrect must be a boolean value' })
  isCorrect: boolean;

  @ReferenceExists({ entity: 'Question' })
  @IsNotEmpty({ message: 'questionId is required' })
  questionId: number;
}
