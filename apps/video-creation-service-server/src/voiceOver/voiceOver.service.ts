import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoiceOverServiceBase } from "./base/voiceOver.service.base";

@Injectable()
export class VoiceOverService extends VoiceOverServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
