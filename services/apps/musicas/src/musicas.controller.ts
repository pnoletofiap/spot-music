import { Controller, Get } from '@nestjs/common';
import { MusicasService } from './musicas.service';

@Controller()
export class MusicasController {
  constructor(private readonly musicasService: MusicasService) {}

  @Get()
  getHello(): string {
    return this.musicasService.getHello();
  }
}
