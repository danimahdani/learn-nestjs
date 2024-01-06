import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { LatihanModule } from './latihan/latihan.module';
import { TaskModule } from './task/task.module';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [
    LatihanModule,
    TaskModule,
    CatsModule,
    PrismaModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    SchoolModule,
  ],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
