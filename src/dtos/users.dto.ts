export class CreateUserDto {
  readonly name: string;
  readonly age: number;
  readonly email: string;
}

export class UpdateUserDto {
  readonly name?: string;
  readonly age?: number;
  readonly email?: string;
}
