import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class TodoService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  public createTodo(dto: any) {
    const todo = {
      id: 1,
      title: 'Todo 1',
      description: 'Todo 1 description',
    };

    this.eventEmitter.emit('todo.created', dto);
  }
}
