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

@Controller('users')
export class UsersController {
  @Get()
  get() {
    return { message: 'Get all users' };
  }

  @Get(':id')
  // @HttpCode(HttpStatus.FORBIDDEN)
  getById(@Param('id') userId: number) {
    return { message: `Get user with id ${userId}` };
  }

  @Post()
  create(@Body() payload: any) {
    console.log('**** Payload ****', payload);
    return { message: 'ok' };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return { id, payload };
  }

  @Delete(':id')
  remove(@Param('id') userId: number) {
    return { message: `Delete user with id ${userId}` };
  }
}
