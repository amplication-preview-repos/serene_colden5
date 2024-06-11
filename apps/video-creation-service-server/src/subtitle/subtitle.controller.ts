import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SubtitleService } from "./subtitle.service";
import { SubtitleControllerBase } from "./base/subtitle.controller.base";

@swagger.ApiTags("subtitles")
@common.Controller("subtitles")
export class SubtitleController extends SubtitleControllerBase {
  constructor(
    protected readonly service: SubtitleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
