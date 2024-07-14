import { Injectable } from '@nestjs/common';

@Injectable()
export class PlaylistsService {
  getHello(): string {
    return 'Hello World!';
  }
}
