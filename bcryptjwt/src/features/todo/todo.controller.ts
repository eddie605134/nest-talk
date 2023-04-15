import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiCreatedResponse, ApiHeader, ApiTags } from '@nestjs/swagger';
import { RoleGuard } from 'src/guards/role/role.guard';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@ApiTags('Todo')
@UseGuards(AuthGuard('jwt'), RoleGuard)
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos() {
    return [];
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    return {
      id,
      title: 'Todo title',
    };
  }

  @ApiHeader({
    name: '檔案上傳',
    description: '上傳檔案',
  })
  @ApiCreatedResponse({ description: 'Todo created' })
  @Post()
  createTodo(@Body() dto: CreateTodoDto) {
    return this.todoService.createTodo(dto);
  }
}
