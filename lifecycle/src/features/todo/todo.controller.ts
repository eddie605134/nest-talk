import {
  Controller,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
} from '@nestjs/common';

@Controller('todo')
export class TodoController
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown
{
  onModuleInit() {
    console.log(TodoController.name, 'onModuleInit');
  }

  onApplicationBootstrap() {
    console.log(TodoController.name, 'onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log(TodoController.name, 'onModuleDestroy');
  }

  beforeApplicationShutdown() {
    console.log(TodoController.name, 'beforeApplicationShutdown');
  }
}
