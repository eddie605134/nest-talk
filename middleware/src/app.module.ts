import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';
import { HelloMiddleware } from './middlewares/hello/hello.middleware';
import { TodoModule } from './features/todo/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    // consumer.apply(HelloMiddleware).forRoutes('todos');
    // consumer.apply(HelloMiddleware).forRoutes({
    //   path: 'todos',
    //   method: RequestMethod.POST,
    // });
    consumer
      .apply(HelloMiddleware)
      .exclude({ path: 'todos', method: RequestMethod.POST })
      .forRoutes('todos');
  }
}
