import { Injectable, Scope } from '@nestjs/common';

import { StorageService } from '../storage/storage.service';

@Injectable({
  scope: Scope.REQUEST,
})
export class TodoService {
  constructor(private readonly storageService: StorageService) {
    console.log(TodoService.name, Math.random());
  }
}
