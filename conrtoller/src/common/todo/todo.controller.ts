import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Patch,
  HttpCode,
  HttpStatus,
  Request,
  Response,
  Headers,
  Session,
} from '@nestjs/common';

import { of } from 'rxjs';

@Controller('todo')
export class TodoController {
  public todos: any[] = [];

  @Get()
  getTodos(@Query() query) {
    if (query.skip || query.limit) {
      const skip = query.skip || 0;
      const limit = query.limit || 10;
      const skipNum = parseInt(skip, 10);
      const limitNum = parseInt(limit, 10);
      return this.todos.slice(skipNum, skipNum + limitNum);
    } else {
      return this.todos;
    }
  }

  @Get(':id')
  getTodosByParams(@Param('id') id) {
    return this.todos.find((todo) => todo.id === id);
  }
  /**
  getTodos(
    @Param('id') id: string
    ) {
    return 'Get all todos' + id;
  }
   */

  /**
   * getList(
   * @Query('page') page: string,
   * @Query('limit') limit: string
   * ) {
   * return `Get list of todos with page ${page} and limit ${limit}`;
   * }
   */

  @Post()
  create(@Body() body: { title: string; description: string; status: string }) {
    this.todos.push({
      id: this.todos.length + 1 + '',
      ...body,
    });
    return body;
  }

  @Post('bu*k')
  createLike() {
    return [1, 2, 3];
  }

  /**
   * creat(
   * @Body('title') title: string,
   * @Body('description') description: string,
   * @Body('status') status: string
   * ) {
   * return { title, description, status };
   * }
   */

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  patch(@Param() body: { id: string }) {
    return body;
  }
}
