import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import {
  AnyFilesInterceptor,
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @UseInterceptors(FileInterceptor('fieldname'))
  @Post('single')
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return file;
  }

  @UseInterceptors(FilesInterceptor('files', 2))
  @Post('multiple')
  uploadMultipleFiles(@UploadedFiles() files: Express.Multer.File[]) {
    return files.map(({ originalname }) => originalname);
  }

  @UseInterceptors(
    FileFieldsInterceptor([
      {
        name: 'first',
      },
      {
        name: 'second',
      },
    ]),
  )
  @Post('multipleColumns')
  uploadMultipleColumnFiles(
    @UploadedFiles() files: { [x: string]: Express.Multer.File[] },
  ) {
    const array = Object.entries(files).map(([field, files]) => {
      const nemes = files.map(({ originalname }) => originalname);
      return { field, nemes };
    });

    return array;
  }

  @UseInterceptors(AnyFilesInterceptor())
  @Post('anyMultiple')
  anyUploadMultipleColumnFiles(@UploadedFiles() files: Express.Multer.File[]) {
    return files.map(({ originalname }) => originalname);
  }
}
