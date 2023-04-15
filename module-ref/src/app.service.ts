import { Injectable, Scope } from '@nestjs/common';
import { ContextIdFactory } from '@nestjs/core';

@Injectable({
  scope: Scope.REQUEST,
})
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
