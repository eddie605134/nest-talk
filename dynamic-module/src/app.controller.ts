import { Controller, Get } from '@nestjs/common';
import { HelloService } from './modules/hello/hello.service';

@Controller()
export class AppController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): string {
    return this.helloService.sayHello();
  }
}
