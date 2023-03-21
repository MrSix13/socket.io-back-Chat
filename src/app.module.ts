/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetewayModule } from './geteway/geteway.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [GetewayModule, SocketModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
