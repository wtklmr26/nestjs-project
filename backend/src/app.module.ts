import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MangaService } from './manga.service';
import { VolumeService } from './volume.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MangaService, VolumeService, PrismaService],
})
export class AppModule {}
