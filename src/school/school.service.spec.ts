import { Test, TestingModule } from '@nestjs/testing';
import { SchoolService } from './school.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

describe('SchoolService', () => {
  let service: SchoolService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [SchoolService, PrismaService],
    }).compile();

    service = module.get<SchoolService>(SchoolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined prisma', () => {
    expect(prisma).toBeDefined();
  });
});
