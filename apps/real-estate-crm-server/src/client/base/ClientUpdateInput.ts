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
import { AgentUpdateManyWithoutClientsInput } from "./AgentUpdateManyWithoutClientsInput";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";
import { EnumClientContactPreference } from "./EnumClientContactPreference";

@InputType()
class ClientUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AgentUpdateManyWithoutClientsInput,
  })
  @ValidateNested()
  @Type(() => AgentUpdateManyWithoutClientsInput)
  @IsOptional()
  @Field(() => AgentUpdateManyWithoutClientsInput, {
    nullable: true,
  })
  agents?: AgentUpdateManyWithoutClientsInput;

  @ApiProperty({
    required: false,
    type: () => AppointmentUpdateManyWithoutClientsInput,
  })
  @ValidateNested()
  @Type(() => AppointmentUpdateManyWithoutClientsInput)
  @IsOptional()
  @Field(() => AppointmentUpdateManyWithoutClientsInput, {
    nullable: true,
  })
  appointments?: AppointmentUpdateManyWithoutClientsInput;

  @ApiProperty({
    required: false,
    enum: EnumClientContactPreference,
  })
  @IsEnum(EnumClientContactPreference)
  @IsOptional()
  @Field(() => EnumClientContactPreference, {
    nullable: true,
  })
  contactPreference?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;
}

export { ClientUpdateInput as ClientUpdateInput };
