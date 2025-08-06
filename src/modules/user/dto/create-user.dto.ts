import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { MESSAGES, REGEX } from 'src/app.utils';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGES.PASSWORD_RULE_MESSAGE,
  })
  password: string;

  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGES.PASSWORD_RULE_MESSAGE,
  })
  confirmPassword: string;
}
