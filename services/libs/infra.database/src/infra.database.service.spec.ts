import { Test, TestingModule } from '@nestjs/testing';
import { InfraDatabaseService } from './infra.database.service';

describe('InfraDatabaseService', () => {
  let service: InfraDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfraDatabaseService],
    }).compile();

    service = module.get<InfraDatabaseService>(InfraDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
