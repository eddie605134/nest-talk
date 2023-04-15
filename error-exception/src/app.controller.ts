import {
  BadRequestException,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { HttpFilter } from './filters/http/http.filter';

// @UseFilters(HttpFilter)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const obj = {
      name: HttpStatus.BAD_REQUEST,
      message: '發生錯誤',
    };
    const buildinError = {
      code: HttpStatus.BAD_REQUEST,
      message: '發生錯誤',
    };
    // throw new BadRequestException(buildinError); // custom error
    throw new BadRequestException('發生錯誤'); // custom error
    // throw new HttpException(obj, HttpStatus.BAD_REQUEST); // custom error
    // throw new HttpException('error', HttpStatus.BAD_REQUEST); // default error
  }
}
