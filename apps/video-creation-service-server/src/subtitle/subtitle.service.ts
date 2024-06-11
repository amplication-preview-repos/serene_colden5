import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubtitleServiceBase } from "./base/subtitle.service.base";

@Injectable()
export class SubtitleService extends SubtitleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
