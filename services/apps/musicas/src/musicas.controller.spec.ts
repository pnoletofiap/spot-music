import { Test, TestingModule } from '@nestjs/testing';
import { MusicasController } from './musicas.controller';
import { MusicasService } from './musicas.service';

describe('MusicasController', () => {
  let musicasController: MusicasController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MusicasController],
      providers: [MusicasService],
    }).compile();

    musicasController = app.get<MusicasController>(MusicasController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(musicasController.getHello()).toBe('Hello World!');
    });
  });
});
