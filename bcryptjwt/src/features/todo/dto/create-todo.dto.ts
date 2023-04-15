import { ApiProperty } from '@nestjs/swagger';
import { TodoPriority } from '../types/todo.type';

export class CreateTodoDto {
  @ApiProperty({
    maxLength: 20,
    description: 'Title of todo',
  })
  public readonly title?: string;

  @ApiProperty({
    required: false,
    maxLength: 100,
    description: 'Description of todo',
  })
  public readonly description?: string;

  @ApiProperty({
    required: false,
    description: 'Status of todo',
  })
  public readonly status?: string;

  @ApiProperty({
    required: false,
    type: [String],
    description: 'Tags of todo',
  })
  public readonly tags?: string[];

  @ApiProperty({
    description: 'Priority of todo',
    enum: TodoPriority,
    enumName: 'TodoPriority',
  })
  public readonly priority: TodoPriority;
}
