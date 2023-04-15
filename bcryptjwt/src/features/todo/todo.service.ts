import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  public todos = [];

  public createTodo(dto: CreateTodoDto) {
    const id = this.todos.length + 1;
    const todo = { id, ...dto };
    this.todos.push(todo);

    return todo;
  }
}
