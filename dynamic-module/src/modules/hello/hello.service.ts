import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class HelloService {
  constructor(@Inject('INPUT') private readonly input: string) {}

  public sayHello(): string {
    return `Hello World! ${this.input}`;
  }
}
