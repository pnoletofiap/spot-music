import { Module } from '@nestjs/common';
import { InfraAuthService } from './infra.auth.service';

@Module({
  providers: [InfraAuthService],
  exports: [InfraAuthService],
})
export class InfraAuthModule {}
