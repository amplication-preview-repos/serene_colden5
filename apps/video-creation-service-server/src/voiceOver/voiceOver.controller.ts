import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VoiceOverService } from "./voiceOver.service";
import { VoiceOverControllerBase } from "./base/voiceOver.controller.base";

@swagger.ApiTags("voiceOvers")
@common.Controller("voiceOvers")
export class VoiceOverController extends VoiceOverControllerBase {
  constructor(
    protected readonly service: VoiceOverService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
