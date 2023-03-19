import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Agency, AgencyDocument } from './schema/agency.schema';
import { RegisterAgencyDto } from './dto/register-agency.dto';

@Injectable()
export class AgencyService {
  constructor(@InjectModel(Agency.name) private AgencyModel: Model<AgencyDocument>) {}

  async registerAgency(agency: RegisterAgencyDto): Promise<Agency> {
    const hashPassword = await bcrypt.hash(agency.password, 10);
    const newAgency = new this.AgencyModel({
      ...agency,
      password: hashPassword
    });
    return newAgency.save();
  }

  async findOne(email: string): Promise<Agency> {
    return this.AgencyModel.findOne({ email }).exec();
  }

  async findByEmail(email: string): Promise<Agency[]> {
    return this.AgencyModel.find({ email }).exec();
  }
}
