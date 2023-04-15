import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './common/todo/todo.controller';
import { TodoModule } from './common/todo/todo.module';
import { CopyTodoModule } from './common/copy-todo/copy-todo.module';

@Module({
  imports: [TodoModule, CopyTodoModule],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
