/* eslint-disable spaced-comment */
import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { AgencyService } from 'src/users/agency';
import { LoginAgencyDto } from 'src/users/agency/dto/login-agency.dto';
import * as bcrypt from 'bcrypt';
import { RegisterAgencyDto } from 'src/users/agency/dto/register-agency.dto';

@Injectable()
export class AuthService {
  constructor(private agencyService: AgencyService) {}

  //Login Agency
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async login(agency) {}
}
