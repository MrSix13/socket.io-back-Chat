/* eslint-disable prettier/prettier */
import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaFactory } from '@nestjs/mongoose/dist';
import { HydratedDocument } from 'mongoose';
import { IsOptional } from 'class-validator';

export enum PlanType {
  FREE = 'FREE',
  BASIC_PLAN = 'BASIC_PLAN',
  ADVANCED_PLAN = 'ADVANCED_PLAN'
}

export type AgencyDocument = HydratedDocument<Agency>;

@Schema({
  timestamps: true
})
export class Agency {
  @Prop()
  name: string;

  @Prop({ unique: [true, 'Email Already Exist'] })
  email: string;

  @Prop()
  password: string;

  @Prop()
  @IsOptional()
  phoneNumber: number;

  @Prop()
  @IsOptional()
  isActive: boolean;

  @Prop()
  @IsOptional()
  planType: PlanType;

  @Prop()
  @IsOptional()
  legalTax: string;

  @Prop()
  cnpj: string;

  @Prop()
  adminName: string;
}

export const AgencySchema = SchemaFactory.createForClass(Agency);
