/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ScriptService } from "../script.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ScriptCreateInput } from "./ScriptCreateInput";
import { Script } from "./Script";
import { ScriptFindManyArgs } from "./ScriptFindManyArgs";
import { ScriptWhereUniqueInput } from "./ScriptWhereUniqueInput";
import { ScriptUpdateInput } from "./ScriptUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ScriptControllerBase {
  constructor(
    protected readonly service: ScriptService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Script })
  @nestAccessControl.UseRoles({
    resource: "Script",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createScript(@common.Body() data: ScriptCreateInput): Promise<Script> {
    return await this.service.createScript({
      data: data,
      select: {
        content: true,
        createdAt: true,
        id: true,
        language: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Script] })
  @ApiNestedQuery(ScriptFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Script",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async scripts(@common.Req() request: Request): Promise<Script[]> {
    const args = plainToClass(ScriptFindManyArgs, request.query);
    return this.service.scripts({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,
        language: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Script })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Script",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async script(
    @common.Param() params: ScriptWhereUniqueInput
  ): Promise<Script | null> {
    const result = await this.service.script({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,
        language: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Script })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Script",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateScript(
    @common.Param() params: ScriptWhereUniqueInput,
    @common.Body() data: ScriptUpdateInput
  ): Promise<Script | null> {
    try {
      return await this.service.updateScript({
        where: params,
        data: data,
        select: {
          content: true,
          createdAt: true,
          id: true,
          language: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Script })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Script",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteScript(
    @common.Param() params: ScriptWhereUniqueInput
  ): Promise<Script | null> {
    try {
      return await this.service.deleteScript({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,
          language: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
