import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

interface ResponseBody {
  code: number;
  message: string;
  timestamp: string;
}

@Catch(HttpException)
export class HttpFilter<T extends HttpException> implements ExceptionFilter<T> {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const code = exception.getStatus();
    const message = (() => {
      const response = exception.getResponse();
      if (typeof response === 'string') {
        return response;
      }
      return (response as any).message;
    })();
    const timestamp = new Date().toISOString();

    response.status(code).json({
      code,
      message,
      timestamp,
    });
  }
}
