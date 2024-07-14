import { Module } from '@nestjs/common';
import { InfraDatabaseService } from './infra.database.service';

@Module({
  providers: [InfraDatabaseService],
  exports: [InfraDatabaseService],
})
export class InfraDatabaseModule {}
