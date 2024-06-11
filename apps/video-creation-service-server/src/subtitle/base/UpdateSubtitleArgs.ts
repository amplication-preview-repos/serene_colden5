/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SubtitleWhereUniqueInput } from "./SubtitleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SubtitleUpdateInput } from "./SubtitleUpdateInput";

@ArgsType()
class UpdateSubtitleArgs {
  @ApiProperty({
    required: true,
    type: () => SubtitleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubtitleWhereUniqueInput)
  @Field(() => SubtitleWhereUniqueInput, { nullable: false })
  where!: SubtitleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SubtitleUpdateInput,
  })
  @ValidateNested()
  @Type(() => SubtitleUpdateInput)
  @Field(() => SubtitleUpdateInput, { nullable: false })
  data!: SubtitleUpdateInput;
}

export { UpdateSubtitleArgs as UpdateSubtitleArgs };
