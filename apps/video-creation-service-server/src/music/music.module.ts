import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MusicModuleBase } from "./base/music.module.base";
import { MusicService } from "./music.service";
import { MusicController } from "./music.controller";
import { MusicResolver } from "./music.resolver";

@Module({
  imports: [MusicModuleBase, forwardRef(() => AuthModule)],
  controllers: [MusicController],
  providers: [MusicService, MusicResolver],
  exports: [MusicService],
})
export class MusicModule {}
