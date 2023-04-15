import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  ParseArrayPipe,
  Patch,
} from '@nestjs/common';
import { ParseIntPipe } from '../../pipes/parse-int/parse-int.pipe';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
  @Get()
  getBooks(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    ids: Array<number>,
  ) {
    return { ids };
  }

  @Get(':id')
  getBookById(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
      book: 'book',
      author: 'ED',
    };
  }

  @Post()
  createBook(@Body() dto: CreateBookDto) {
    return dto;
  }

  @Patch(':id')
  updateBook(@Param('id') id: string, @Body() dto: UpdateBookDto) {
    return {
      id,
      ...dto,
    };
  }
}
