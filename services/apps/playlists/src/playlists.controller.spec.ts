import { Test, TestingModule } from '@nestjs/testing';
import { PlaylistsController } from './playlists.controller';
import { PlaylistsService } from './playlists.service';

describe('PlaylistsController', () => {
  let playlistsController: PlaylistsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlaylistsController],
      providers: [PlaylistsService],
    }).compile();

    playlistsController = app.get<PlaylistsController>(PlaylistsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(playlistsController.getHello()).toBe('Hello World!');
    });
  });
});
