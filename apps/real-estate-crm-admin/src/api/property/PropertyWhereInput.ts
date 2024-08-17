import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentListRelationFilter } from "../agent/AgentListRelationFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  agents?: AgentListRelationFilter;
  appointments?: AppointmentListRelationFilter;
  bathrooms?: IntNullableFilter;
  bedrooms?: IntNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  squareMeter?: FloatNullableFilter;
};
