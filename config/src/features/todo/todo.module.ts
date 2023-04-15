import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({})
export class TodoModule implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    console.log('TodoModule initialized');
  }
}
