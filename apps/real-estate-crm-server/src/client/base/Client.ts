/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Agent } from "../../agent/base/Agent";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsDate,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { Appointment } from "../../appointment/base/Appointment";
import { EnumClientContactPreference } from "./EnumClientContactPreference";

@ObjectType()
class Client {
  @ApiProperty({
    required: false,
    type: () => [Agent],
  })
  @ValidateNested()
  @Type(() => Agent)
  @IsOptional()
  agents?: Array<Agent>;

  @ApiProperty({
    required: false,
    type: () => [Appointment],
  })
  @ValidateNested()
  @Type(() => Appointment)
  @IsOptional()
  appointments?: Array<Appointment>;

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
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  name!: string | null;

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
  phone!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Client as Client };
