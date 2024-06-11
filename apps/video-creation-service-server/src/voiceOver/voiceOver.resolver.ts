import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VoiceOverResolverBase } from "./base/voiceOver.resolver.base";
import { VoiceOver } from "./base/VoiceOver";
import { VoiceOverService } from "./voiceOver.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VoiceOver)
export class VoiceOverResolver extends VoiceOverResolverBase {
  constructor(
    protected readonly service: VoiceOverService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
