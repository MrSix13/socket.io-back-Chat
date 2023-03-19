/* eslint-disable prettier/prettier */
import {IsString, MaxLength, IsNotEmpty, IsEmail } from "class-validator";
import {ApiProperty} from '@nestjs/swagger';

export class LoginAgencyDto{
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(32)
    email:string;
   
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password:string;
}