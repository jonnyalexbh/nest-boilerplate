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

  @Get('greetings')
  getGreetings(
    @Query('limit') limit = 10,
    @Query('offset') offset = 20,
    @Query('brand') brand = 'XYZ',
  ) {
    return {
      message: `greetings limit ${limit}, offset ${offset} brand ${brand}`,
    };
  }

  @Get('greetings/:id')
  getUser(@Param('id') greetingId: number) {
    return { message: `GET greeting with id ${greetingId}` };
  }

  @Post('greetings')
  getGreeting(@Body() request: Request) {
    return request;
  }
}
