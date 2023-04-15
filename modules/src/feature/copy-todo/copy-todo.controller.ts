import { Controller, Get } from '@nestjs/common';
import { TodoService } from '../todo/todo.service';

@Controller('copy-todos')
export class CopyTodoController {
  constructor(private readonly todoSerive: TodoService) {}

  @Get()
  getTodos() {
    return this.todoSerive.getTodos();
  }
}
