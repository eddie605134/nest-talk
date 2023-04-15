import { Module } from '@nestjs/common';
import { StorageModule } from '../storage/storage.module';
import { TodoService } from './todo.service';

@Module({
  imports: [StorageModule],
  providers: [TodoService],
  exports: [TodoService],
})
export class TodoModule {}
