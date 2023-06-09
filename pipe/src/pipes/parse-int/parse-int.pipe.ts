import {
  ArgumentMetadata,
  Injectable,
  NotAcceptableException,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const integer = parseInt(value, 10);
    if (isNaN(integer)) {
      throw new NotAcceptableException('不是數字');
    }
    return integer;
  }
}
