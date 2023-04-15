import {
  PartialType,
  PickType,
  OmitType,
  IntersectionType,
} from '@nestjs/mapped-types';
import { IsOptional, MaxLength } from 'class-validator';
import { CreateBookDto } from './create-book.dto';

class NoteDto {
  @IsOptional()
  @MaxLength(200)
  public readonly note: string;
}

// export class UpdateBookDto extends PartialType(CreateBookDto) {}
// export class UpdateBookDto extends PickType(CreateBookDto, ['name']) {}
// export class UpdateBookDto extends OmitType(CreateBookDto, ['name']) {}
// export class UpdateBookDto extends IntersectionType(CreateBookDto, NoteDto) {}

const CombineType = IntersectionType(
  PickType(CreateBookDto, ['name']),
  NoteDto,
);

export class UpdateBookDto extends CombineType {}
