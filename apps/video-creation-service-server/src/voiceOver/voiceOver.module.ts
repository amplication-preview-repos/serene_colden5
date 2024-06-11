import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VoiceOverModuleBase } from "./base/voiceOver.module.base";
import { VoiceOverService } from "./voiceOver.service";
import { VoiceOverController } from "./voiceOver.controller";
import { VoiceOverResolver } from "./voiceOver.resolver";

@Module({
  imports: [VoiceOverModuleBase, forwardRef(() => AuthModule)],
  controllers: [VoiceOverController],
  providers: [VoiceOverService, VoiceOverResolver],
  exports: [VoiceOverService],
})
export class VoiceOverModule {}
