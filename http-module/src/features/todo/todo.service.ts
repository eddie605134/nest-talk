import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Todo } from './models/todo.model';

@Injectable()
export class TodoService {
  constructor(private readonly httpService: HttpService) {}

  public getTodos() {
    return this.httpService.get<Todo[]>('/todos');
  }
}
