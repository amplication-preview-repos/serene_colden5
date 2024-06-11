import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SoundEffectServiceBase } from "./base/soundEffect.service.base";

@Injectable()
export class SoundEffectService extends SoundEffectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
