/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProjectUpdateManyWithoutCampaignsInput {
  @Field(() => [ProjectWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProjectWhereUniqueInput],
  })
  connect?: Array<ProjectWhereUniqueInput>;

  @Field(() => [ProjectWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProjectWhereUniqueInput],
  })
  disconnect?: Array<ProjectWhereUniqueInput>;

  @Field(() => [ProjectWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProjectWhereUniqueInput],
  })
  set?: Array<ProjectWhereUniqueInput>;
}

export { ProjectUpdateManyWithoutCampaignsInput as ProjectUpdateManyWithoutCampaignsInput };
