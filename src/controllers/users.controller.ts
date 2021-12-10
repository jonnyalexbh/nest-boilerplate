import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { message: 'Get all users' };
  }

  @Get(':id')
  getUsersAll(@Param() userId: number) {
    return { message: `Get user with id ${userId}` };
  }

  @Post()
  storeUser() {
    return 'ok';
  }
}
