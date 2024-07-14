import { Test, TestingModule } from '@nestjs/testing';
import { InfraAuthService } from './infra.auth.service';

describe('InfraAuthService', () => {
  let service: InfraAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfraAuthService],
    }).compile();

    service = module.get<InfraAuthService>(InfraAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
