import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './feature/todo/todo.controller';
import { CopyTodoController } from './feature/copy-todo/copy-todo.controller';
import { TodoModule } from './feature/todo/todo.module';
import { CopyTodoModule } from './feature/copy-todo/copy-todo.module';
import { CommonModule } from './modules/common/common.module';

@Module({
  imports: [TodoModule, CopyTodoModule, CommonModule],
  controllers: [AppController, TodoController, CopyTodoController],
  providers: [AppService],
})
export class AppModule {}
