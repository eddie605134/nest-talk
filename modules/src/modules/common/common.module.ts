import { Module, Global } from '@nestjs/common';
import { StorageModule } from '../storage/storage.module';

@Global()
@Module({
  imports: [StorageModule],
  exports: [StorageModule],
})
export class CommonModule {}
