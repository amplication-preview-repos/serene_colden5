import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SoundEffectResolverBase } from "./base/soundEffect.resolver.base";
import { SoundEffect } from "./base/SoundEffect";
import { SoundEffectService } from "./soundEffect.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SoundEffect)
export class SoundEffectResolver extends SoundEffectResolverBase {
  constructor(
    protected readonly service: SoundEffectService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
