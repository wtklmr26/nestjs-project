import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { MangaService } from './manga.service';
import { VolumeService } from './volume.service';
import { Manga as MangaModel, Volume as VolumeModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly mangaService: MangaService,
    private readonly volumeService: VolumeService,
  ) {}

  @Get('mangas')
  async getMangas(): Promise<MangaModel[]> {
    return this.mangaService.mangas({
      where: {},
    });
  }

  @Post('mangas')
  async createManga(@Body() postData: { title: string }): Promise<MangaModel> {
    const { title } = postData;
    return this.mangaService.createManga({
      title,
    });
  }

  @Put('mangas/:id')
  async updateManga(
    @Param('id') id: string,
    @Body() putData: { title: string },
  ): Promise<MangaModel> {
    const { title } = putData;
    return this.mangaService.updateManga({
      where: { id: Number(id) },
      data: { title },
    });
  }

  @Delete('mangas/:id')
  async deleteManga(@Param('id') id: string): Promise<MangaModel> {
    return this.mangaService.deleteManga({ id: Number(id) });
  }

  @Get('mangas/:id/volumes')
  async getVlumes(@Param('id') id: string): Promise<VolumeModel[]> {
    return this.volumeService.volumes({
      where: { mangaId: Number(id) },
    });
  }
}
