import { Module } from '@nestjs/common';
import { TouristController } from './tourist.controller';
import { TouristService } from './tourist.service';

@Module({
  controllers: [TouristController],
  providers: [TouristService]
})
export class TouristModule {}
