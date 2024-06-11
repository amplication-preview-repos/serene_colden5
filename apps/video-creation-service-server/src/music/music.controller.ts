import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MusicService } from "./music.service";
import { MusicControllerBase } from "./base/music.controller.base";

@swagger.ApiTags("music")
@common.Controller("music")
export class MusicController extends MusicControllerBase {
  constructor(
    protected readonly service: MusicService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
