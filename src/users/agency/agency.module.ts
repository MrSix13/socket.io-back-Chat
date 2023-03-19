import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgencyService } from './agency.service';
import { AgencyController } from './agency.controller';
import { AgencySchema, Agency } from './schema/agency.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Agency.name, schema: AgencySchema }])],
  controllers: [AgencyController],
  providers: [AgencyService],
  exports: [AgencyService]
})
export class AgencyModule {}
