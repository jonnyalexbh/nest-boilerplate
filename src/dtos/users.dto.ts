import {
  IsString,
  IsNumber,
  IsEmail,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly age: number;
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
