import { Controller, Get, Inject } from '@nestjs/common';
import { ModuleRef, ContextIdFactory } from '@nestjs/core';
import { AppService } from './app.service';
import { StorageService } from './modules/storage/storage.service';
import { Request } from 'express';

@Controller()
export class AppController {
  // private readonly appService: AppService;
  // private readonly storageService: StorageService;
  // constructor(moduleRef: ModuleRef) {
  //   this.appService = moduleRef.get(AppService);
  //   this.storageService = moduleRef.get(StorageService, { strict: false });
  // }

  constructor(
    @Inject(Request) private readonly request: Request,
    private readonly moduleRef: ModuleRef,
  ) {
    const key = ContextIdFactory.create();
    moduleRef.registerRequestByContextId(this.request, key);
  }

  @Get()
  async getHello() {
    const key = ContextIdFactory.getByRequest(this.request);
    const appService = await this.moduleRef.resolve(AppService, key);
    const diffAppService = await this.moduleRef.resolve(AppService, key);
    return {
      isSame: appService === diffAppService,
    };
  }
}
