/* eslint-disable prettier/prettier */
import {IsString, MaxLength, IsNotEmpty, IsEmail } from "class-validator";
import {ApiProperty} from '@nestjs/swagger';

export class RegisterAgencyDto{
    @ApiProperty()
    @MaxLength(32)
    @IsString()
    @IsNotEmpty()
    name:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password:string;

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cnpj:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    adminName:string

}