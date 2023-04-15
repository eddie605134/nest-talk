import { Controller, Get, Inject, Optional } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTHOR') private readonly author: string,
    @Inject('AUTHOR_MESSAGE') private readonly authorMessage: string,
    @Inject('ALIAS_APP_SERVICE') private readonly aliasAppService: AppService,
    @Inject('CUSTOM_MESSAGE') private readonly customMessage: AppService,
    @Optional() @Inject('NO_EXIST') private readonly noExist: unknown = null,
  ) {
    console.log('aliasAppService', this.aliasAppService === this.appService);
    console.log('author', this.author);
    console.log('authorMessage', this.authorMessage);
    console.log('customMessage', this.customMessage);
    console.log('noExist', this.noExist);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
