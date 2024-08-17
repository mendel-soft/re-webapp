/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AgentWhereUniqueInput } from "../../agent/base/AgentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AgentCreateNestedManyWithoutClientsInput {
  @Field(() => [AgentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AgentWhereUniqueInput],
  })
  connect?: Array<AgentWhereUniqueInput>;
}

export { AgentCreateNestedManyWithoutClientsInput as AgentCreateNestedManyWithoutClientsInput };
