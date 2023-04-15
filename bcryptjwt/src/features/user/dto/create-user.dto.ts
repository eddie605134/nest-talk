import { MaxLength, IsEmail } from 'class-validator';

export class CreateUserDto {
  @MaxLength(3)
  @MaxLength(20)
  public readonly username: string;

  @IsEmail()
  public readonly email: string;

  @MaxLength(3)
  @MaxLength(20)
  public readonly password: string;
}
