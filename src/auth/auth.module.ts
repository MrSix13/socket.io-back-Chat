import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AgencyModule } from 'src/users/agency/agency.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    AgencyModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: { expiresIn: '34400s' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
