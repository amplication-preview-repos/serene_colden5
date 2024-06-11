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
import { MusicService } from "../music.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MusicCreateInput } from "./MusicCreateInput";
import { Music } from "./Music";
import { MusicFindManyArgs } from "./MusicFindManyArgs";
import { MusicWhereUniqueInput } from "./MusicWhereUniqueInput";
import { MusicUpdateInput } from "./MusicUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MusicControllerBase {
  constructor(
    protected readonly service: MusicService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Music })
  @nestAccessControl.UseRoles({
    resource: "Music",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMusic(@common.Body() data: MusicCreateInput): Promise<Music> {
    return await this.service.createMusic({
      data: data,
      select: {
        createdAt: true,
        genre: true,
        id: true,
        sourceUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Music] })
  @ApiNestedQuery(MusicFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Music",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async musicItems(@common.Req() request: Request): Promise<Music[]> {
    const args = plainToClass(MusicFindManyArgs, request.query);
    return this.service.musicItems({
      ...args,
      select: {
        createdAt: true,
        genre: true,
        id: true,
        sourceUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Music })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Music",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async music(
    @common.Param() params: MusicWhereUniqueInput
  ): Promise<Music | null> {
    const result = await this.service.music({
      where: params,
      select: {
        createdAt: true,
        genre: true,
        id: true,
        sourceUrl: true,
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
  @swagger.ApiOkResponse({ type: Music })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Music",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMusic(
    @common.Param() params: MusicWhereUniqueInput,
    @common.Body() data: MusicUpdateInput
  ): Promise<Music | null> {
    try {
      return await this.service.updateMusic({
        where: params,
        data: data,
        select: {
          createdAt: true,
          genre: true,
          id: true,
          sourceUrl: true,
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
  @swagger.ApiOkResponse({ type: Music })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Music",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMusic(
    @common.Param() params: MusicWhereUniqueInput
  ): Promise<Music | null> {
    try {
      return await this.service.deleteMusic({
        where: params,
        select: {
          createdAt: true,
          genre: true,
          id: true,
          sourceUrl: true,
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
