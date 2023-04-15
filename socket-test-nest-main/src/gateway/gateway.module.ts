import { Module } from '@nestjs/common';
import { MyGateway } from './gateway';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';

@Module({
  providers: [MyGateway],
})
export class GatewayModule {}
