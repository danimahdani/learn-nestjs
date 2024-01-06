import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

describe('TaskController', () => {
  let controller: TaskController;
  let prisma: PrismaModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [TaskController],
    }).compile();

    controller = module.get<TaskController>(TaskController);
    prisma = module.get<PrismaModule>(PrismaModule);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined prisma', () => {
    expect(prisma).toBeDefined();
  });
});
