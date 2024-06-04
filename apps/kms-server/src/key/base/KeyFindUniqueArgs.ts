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
import { KeyWhereUniqueInput } from "./KeyWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class KeyFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => KeyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => KeyWhereUniqueInput)
  @Field(() => KeyWhereUniqueInput, { nullable: false })
  where!: KeyWhereUniqueInput;
}

export { KeyFindUniqueArgs as KeyFindUniqueArgs };