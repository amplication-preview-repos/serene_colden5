import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VisualServiceBase } from "./base/visual.service.base";

@Injectable()
export class VisualService extends VisualServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
