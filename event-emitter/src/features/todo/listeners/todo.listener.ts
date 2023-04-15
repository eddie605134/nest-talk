import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class TodoLister {
  constructor(private readonly httpService: HttpService) {}

  @OnEvent('todo.created')
  onTodoCreated(event) {
    const data = {
      name: 'todo.created',
      timestamp: new Date().toISOString(),
      payload: event,
    };
    this.httpService.post('http://localhost:5006', data).subscribe({
      next: (response) => {
        console.log(response.data);
      },
    });
  }
}
