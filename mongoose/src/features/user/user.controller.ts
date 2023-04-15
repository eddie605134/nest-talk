import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Get,
  Query,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto) {
    const document = await this.userService.createUser(dto);
    return document.toJSON();
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    const document = await this.userService.updateUser(id, dto);
    return document.toJSON();
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const document = await this.userService.getUser(id);
    return document.toJSON();
  }

  @Get()
  async getUsers(@Query('skip') skip: number, @Query('limit') limit: number) {
    const documents = await this.userService.getUsers(skip, limit);
    return documents.map((doc) => doc.toJSON());
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const document = await this.userService.deleteUser(id);
    return document.toJSON();
  }
}
