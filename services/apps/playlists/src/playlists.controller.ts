import { Controller, Get } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';

@Controller()
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Get()
  getHello(): string {
    return this.playlistsService.getHello();
  }
}
