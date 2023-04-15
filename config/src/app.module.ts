import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './features/todo/todo.module';
import databaseConfig from './config/database.config';
import serverConfig from './config/server.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.env.NODE_ENV}.env`,
      load: [databaseConfig, serverConfig],
      expandVariables: true,
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}
  onModuleInit() {
    // const { database, password } = this.configService.get('database');
    // console.log('database', database);
    // console.log('password', password);
    const appDomain = this.configService.get('APP_DOMAIN');
    const appRedirect = this.configService.get('APP_REDIRECT_URI');
    console.log('appDomain', appDomain);
    console.log('appRedirect', appRedirect);
  }
}
