import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MangaService } from './manga.service';
import { PostService } from './volume.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MangaService, PostService, PrismaService],
})
export class AppModule {}
