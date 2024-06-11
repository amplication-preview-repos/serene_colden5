import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SoundEffectModuleBase } from "./base/soundEffect.module.base";
import { SoundEffectService } from "./soundEffect.service";
import { SoundEffectController } from "./soundEffect.controller";
import { SoundEffectResolver } from "./soundEffect.resolver";

@Module({
  imports: [SoundEffectModuleBase, forwardRef(() => AuthModule)],
  controllers: [SoundEffectController],
  providers: [SoundEffectService, SoundEffectResolver],
  exports: [SoundEffectService],
})
export class SoundEffectModule {}
