import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { RegisterAgencyDto } from 'src/users/agency/dto/register-agency.dto';
import { AgencyService } from './agency.service';

@Controller('agency')
export class AgencyController {
  constructor(private readonly agencyService: AgencyService) {}

  @Post('register')
  async registerAgency(
    @Res() res,
    @Body() registerAgencyDto: RegisterAgencyDto
  ): Promise<RegisterAgencyDto> {
    const newAgency = await this.agencyService.registerAgency(registerAgencyDto);
    return res.status(HttpStatus.OK).json({
      message: 'Agency Register Successfully',
      agency: newAgency
    });
  }
}
