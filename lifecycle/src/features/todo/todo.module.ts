import {
  Module,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown
{
  onModuleInit() {
    console.log(TodoModule.name, 'onModuleInit');
  }

  onApplicationBootstrap() {
    console.log(TodoModule.name, 'onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log(TodoModule.name, 'onModuleDestroy');
  }

  beforeApplicationShutdown() {
    console.log(TodoModule.name, 'beforeApplicationShutdown');
  }
}
