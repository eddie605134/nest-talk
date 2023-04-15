import {
  Injectable,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
} from '@nestjs/common';

@Injectable()
export class AppService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown
{
  getHello(): string {
    return 'Hello World!';
  }

  onModuleInit() {
    console.log(AppService.name, 'onModuleInit');
  }

  onApplicationBootstrap() {
    console.log(AppService.name, 'onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log(AppService.name, 'onModuleDestroy');
  }

  beforeApplicationShutdown() {
    console.log(AppService.name, 'beforeApplicationShutdown');
  }
}
