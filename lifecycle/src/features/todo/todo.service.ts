import {
  Injectable,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
} from '@nestjs/common';

@Injectable()
export class TodoService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown
{
  onModuleInit() {
    console.log(TodoService.name, 'onModuleInit');
  }

  onApplicationBootstrap() {
    console.log(TodoService.name, 'onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log(TodoService.name, 'onModuleDestroy');
  }

  beforeApplicationShutdown() {
    console.log(TodoService.name, 'beforeApplicationShutdown');
  }
}
