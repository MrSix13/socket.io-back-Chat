/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TouristModule } from './users/tourist/tourist.module';
import { AgencyModule } from './users/agency/agency.module';
import { AuthModule } from './auth/auth.module';
import { GetewayModule } from './geteway/geteway.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    TouristModule,
    AgencyModule,
    AuthModule,
    GetewayModule,
    SocketModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
