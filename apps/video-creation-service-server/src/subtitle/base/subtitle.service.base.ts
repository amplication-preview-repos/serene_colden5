/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Subtitle as PrismaSubtitle } from "@prisma/client";

export class SubtitleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SubtitleCountArgs, "select">): Promise<number> {
    return this.prisma.subtitle.count(args);
  }

  async subtitles<T extends Prisma.SubtitleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubtitleFindManyArgs>
  ): Promise<PrismaSubtitle[]> {
    return this.prisma.subtitle.findMany<Prisma.SubtitleFindManyArgs>(args);
  }
  async subtitle<T extends Prisma.SubtitleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubtitleFindUniqueArgs>
  ): Promise<PrismaSubtitle | null> {
    return this.prisma.subtitle.findUnique(args);
  }
  async createSubtitle<T extends Prisma.SubtitleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubtitleCreateArgs>
  ): Promise<PrismaSubtitle> {
    return this.prisma.subtitle.create<T>(args);
  }
  async updateSubtitle<T extends Prisma.SubtitleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubtitleUpdateArgs>
  ): Promise<PrismaSubtitle> {
    return this.prisma.subtitle.update<T>(args);
  }
  async deleteSubtitle<T extends Prisma.SubtitleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubtitleDeleteArgs>
  ): Promise<PrismaSubtitle> {
    return this.prisma.subtitle.delete(args);
  }
}
