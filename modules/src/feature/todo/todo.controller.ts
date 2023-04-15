import { Controller, Post, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { StorageService } from '../../modules/storage/storage.service';

@Controller('todos')
export class TodoController {
  constructor(
    private readonly todoService: TodoService,
    private readonly storageService: StorageService,
  ) {}

  @Post()
  addTodo(@Body() todo: any) {
    this.storageService.addData(todo);
    return this.storageService.getData();
  }
}
