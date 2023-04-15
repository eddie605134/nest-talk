import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StorageModule } from './modules/storage/storage.module';
import { TodoModule } from './modules/todo/todo.module';

@Module({
  imports: [StorageModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
