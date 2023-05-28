import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Volume, Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async post(
    postWhereUniqueInput: Prisma.VolumeWhereUniqueInput,
  ): Promise<Volume | null> {
    return this.prisma.volume.findUnique({
      where: postWhereUniqueInput,
    });
  }

  async posts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.VolumeWhereUniqueInput;
    where?: Prisma.VolumeWhereInput;
    orderBy?: Prisma.VolumeOrderByWithRelationInput;
  }): Promise<Volume[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.volume.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPost(data: Prisma.VolumeCreateInput): Promise<Volume> {
    return this.prisma.volume.create({
      data,
    });
  }

  async updatePost(params: {
    where: Prisma.VolumeWhereUniqueInput;
    data: Prisma.VolumeUpdateInput;
  }): Promise<Volume> {
    const { data, where } = params;
    return this.prisma.volume.update({
      data,
      where,
    });
  }

  async deletePost(where: Prisma.VolumeWhereUniqueInput): Promise<Volume> {
    return this.prisma.volume.delete({
      where,
    });
  }
}
