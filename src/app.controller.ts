import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers(
    @Query('limit') limit = 10,
    @Query('offset') offset = 20,
    @Query('brand') brand = 'XYZ',
  ) {
    return { message: `Users limit ${limit}, offset ${offset} brand ${brand}` };
  }

  @Get('users/:id')
  getUser(@Param('id') userId: number) {
    return { message: `GET user with id ${userId}` };
  }

  @Post('users')
  getGreeting(@Body() request: Request) {
    return request;
  }
}
