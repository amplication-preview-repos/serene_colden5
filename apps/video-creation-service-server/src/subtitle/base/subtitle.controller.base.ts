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
import { SubtitleService } from "../subtitle.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SubtitleCreateInput } from "./SubtitleCreateInput";
import { Subtitle } from "./Subtitle";
import { SubtitleFindManyArgs } from "./SubtitleFindManyArgs";
import { SubtitleWhereUniqueInput } from "./SubtitleWhereUniqueInput";
import { SubtitleUpdateInput } from "./SubtitleUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SubtitleControllerBase {
  constructor(
    protected readonly service: SubtitleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Subtitle })
  @nestAccessControl.UseRoles({
    resource: "Subtitle",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSubtitle(
    @common.Body() data: SubtitleCreateInput
  ): Promise<Subtitle> {
    return await this.service.createSubtitle({
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
  @swagger.ApiOkResponse({ type: [Subtitle] })
  @ApiNestedQuery(SubtitleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Subtitle",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async subtitles(@common.Req() request: Request): Promise<Subtitle[]> {
    const args = plainToClass(SubtitleFindManyArgs, request.query);
    return this.service.subtitles({
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
  @swagger.ApiOkResponse({ type: Subtitle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Subtitle",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async subtitle(
    @common.Param() params: SubtitleWhereUniqueInput
  ): Promise<Subtitle | null> {
    const result = await this.service.subtitle({
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
  @swagger.ApiOkResponse({ type: Subtitle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Subtitle",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSubtitle(
    @common.Param() params: SubtitleWhereUniqueInput,
    @common.Body() data: SubtitleUpdateInput
  ): Promise<Subtitle | null> {
    try {
      return await this.service.updateSubtitle({
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
  @swagger.ApiOkResponse({ type: Subtitle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Subtitle",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSubtitle(
    @common.Param() params: SubtitleWhereUniqueInput
  ): Promise<Subtitle | null> {
    try {
      return await this.service.deleteSubtitle({
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
