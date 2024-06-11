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
import { VisualWhereInput } from "./VisualWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { VisualOrderByInput } from "./VisualOrderByInput";

@ArgsType()
class VisualFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => VisualWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => VisualWhereInput, { nullable: true })
  @Type(() => VisualWhereInput)
  where?: VisualWhereInput;

  @ApiProperty({
    required: false,
    type: [VisualOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [VisualOrderByInput], { nullable: true })
  @Type(() => VisualOrderByInput)
  orderBy?: Array<VisualOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { VisualFindManyArgs as VisualFindManyArgs };
