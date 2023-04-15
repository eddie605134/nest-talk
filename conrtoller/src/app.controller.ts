import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { of } from 'rxjs';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('async')
  async getAsync() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('async');
      }, 2000);
    });
  }

  @Get('rxjs')
  async getRxjs() {
    return of([]);
  }

  @Get('mode')
  testMode(@Res() response: Response) {
    response.status(200).json({
      message: 'Hello',
    });
  }

  // 不符合模式
  @Get('mode2')
  testMode2(@Res() response: Response) {
    return [];
  }

  @Get('mode3')
  testMode3(@Res({ passthrough: true }) response: Response) {
    return [];
  }
}
