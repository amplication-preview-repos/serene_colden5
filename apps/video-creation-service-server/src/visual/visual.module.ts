import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VisualModuleBase } from "./base/visual.module.base";
import { VisualService } from "./visual.service";
import { VisualController } from "./visual.controller";
import { VisualResolver } from "./visual.resolver";

@Module({
  imports: [VisualModuleBase, forwardRef(() => AuthModule)],
  controllers: [VisualController],
  providers: [VisualService, VisualResolver],
  exports: [VisualService],
})
export class VisualModule {}
