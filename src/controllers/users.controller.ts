import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  // HttpStatus,
  // HttpCode,
} from '@nestjs/common';

import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  get() {
    return this.usersService.findAll();
    // return { message: 'Get all users' };
  }

  @Get(':id')
  // @HttpCode(HttpStatus.FORBIDDEN)
  getById(@Param('id') id: number) {
    return this.usersService.findOne(+id);
    // return { message: `Get user with id ${userId}` };
  }

  @Post()
  create(@Body() payload: any) {
    return this.usersService.create(payload);
    // return { payload };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return this.usersService.update(+id, payload);
    // return { id, payload };
  }

  @Delete(':id')
  remove(@Param('id') userId: number) {
    return { message: `Delete user with id ${userId}` };
  }
}
