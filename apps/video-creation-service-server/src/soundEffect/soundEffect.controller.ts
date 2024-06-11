import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SoundEffectService } from "./soundEffect.service";
import { SoundEffectControllerBase } from "./base/soundEffect.controller.base";

@swagger.ApiTags("soundEffects")
@common.Controller("soundEffects")
export class SoundEffectController extends SoundEffectControllerBase {
  constructor(
    protected readonly service: SoundEffectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
