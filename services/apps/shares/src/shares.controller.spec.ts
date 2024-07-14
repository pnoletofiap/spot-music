import { Test, TestingModule } from '@nestjs/testing';
import { SharesController } from './shares.controller';
import { SharesService } from './shares.service';

describe('SharesController', () => {
  let sharesController: SharesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SharesController],
      providers: [SharesService],
    }).compile();

    sharesController = app.get<SharesController>(SharesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sharesController.getHello()).toBe('Hello World!');
    });
  });
});
