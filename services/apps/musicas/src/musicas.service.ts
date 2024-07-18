import { Injectable } from '@nestjs/common';

@Injectable()
export class MusicasService {
  getHello(): string {
    return 'Hello World!';
  }
}
