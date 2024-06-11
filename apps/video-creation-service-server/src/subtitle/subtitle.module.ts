import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubtitleModuleBase } from "./base/subtitle.module.base";
import { SubtitleService } from "./subtitle.service";
import { SubtitleController } from "./subtitle.controller";
import { SubtitleResolver } from "./subtitle.resolver";

@Module({
  imports: [SubtitleModuleBase, forwardRef(() => AuthModule)],
  controllers: [SubtitleController],
  providers: [SubtitleService, SubtitleResolver],
  exports: [SubtitleService],
})
export class SubtitleModule {}
