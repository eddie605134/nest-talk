import { Body, Controller, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(@Body() dto: any) {
    return this.todoService.createTodo(dto);
  }
}
