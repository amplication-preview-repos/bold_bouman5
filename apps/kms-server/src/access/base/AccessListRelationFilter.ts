/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccessWhereInput } from "./AccessWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AccessListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AccessWhereInput,
  })
  @ValidateNested()
  @Type(() => AccessWhereInput)
  @IsOptional()
  @Field(() => AccessWhereInput, {
    nullable: true,
  })
  every?: AccessWhereInput;

  @ApiProperty({
    required: false,
    type: () => AccessWhereInput,
  })
  @ValidateNested()
  @Type(() => AccessWhereInput)
  @IsOptional()
  @Field(() => AccessWhereInput, {
    nullable: true,
  })
  some?: AccessWhereInput;

  @ApiProperty({
    required: false,
    type: () => AccessWhereInput,
  })
  @ValidateNested()
  @Type(() => AccessWhereInput)
  @IsOptional()
  @Field(() => AccessWhereInput, {
    nullable: true,
  })
  none?: AccessWhereInput;
}
export { AccessListRelationFilter as AccessListRelationFilter };