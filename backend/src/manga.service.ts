import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Manga, Prisma } from '@prisma/client';

@Injectable()
export class MangaService {
  constructor(private prisma: PrismaService) {}

  async manga(
    mangaWhereUniqueInput: Prisma.MangaWhereUniqueInput,
  ): Promise<Manga | null> {
    return this.prisma.manga.findUnique({
      where: mangaWhereUniqueInput,
    });
  }

  async mangas(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MangaWhereUniqueInput;
    where?: Prisma.MangaWhereInput;
    orderBy?: Prisma.MangaOrderByWithRelationInput;
  }): Promise<Manga[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.manga.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createManga(data: Prisma.MangaCreateInput): Promise<Manga> {
    return this.prisma.manga.create({
      data,
    });
  }

  async updateManga(params: {
    where: Prisma.MangaWhereUniqueInput;
    data: Prisma.MangaUpdateInput;
  }): Promise<Manga> {
    const { where, data } = params;
    return this.prisma.manga.update({
      data,
      where,
    });
  }

  async deleteManga(where: Prisma.MangaWhereUniqueInput): Promise<Manga> {
    return this.prisma.manga.delete({
      where,
    });
  }
}
