import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from './decorators/roles/roles.decorator';
import { User } from './decorators/user/user.decorator';
import { RoleGuard } from './guards/role/role.guard';
import { Autoruzation } from './decorators/autoruzation/autoruzation.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseGuards(RoleGuard)
  // @Roles('admin', 'staff')
  @Autoruzation('admin')
  @Get()
  getHello(@User('name') user: any): string {
    return user;
  }
}
