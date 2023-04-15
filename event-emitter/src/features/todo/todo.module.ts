import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { HttpModule } from '@nestjs/axios';
import { TodoLister } from './listeners/todo.listener';

@Module({
  imports: [HttpModule],
  controllers: [TodoController],
  providers: [TodoService, TodoLister],
})
export class TodoModule {}
