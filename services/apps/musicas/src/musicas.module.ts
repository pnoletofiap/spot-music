import { Module } from '@nestjs/common';
import { MusicasController } from './musicas.controller';
import { MusicasService } from './musicas.service';

@Module({
  imports: [],
  controllers: [MusicasController],
  providers: [MusicasService],
})
export class MusicasModule {}
