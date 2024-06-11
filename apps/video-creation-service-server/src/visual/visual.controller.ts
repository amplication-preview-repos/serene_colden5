import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VisualService } from "./visual.service";
import { VisualControllerBase } from "./base/visual.controller.base";

@swagger.ApiTags("visuals")
@common.Controller("visuals")
export class VisualController extends VisualControllerBase {
  constructor(
    protected readonly service: VisualService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
