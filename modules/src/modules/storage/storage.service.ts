import { Injectable } from '@nestjs/common';

@Injectable()
export class StorageService {
  private list: any[] = [];

  public addData(item: any) {
    this.list.push(item);
  }

  public getData() {
    return this.list;
  }
}
