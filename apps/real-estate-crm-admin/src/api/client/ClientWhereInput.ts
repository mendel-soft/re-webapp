import { AgentListRelationFilter } from "../agent/AgentListRelationFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientWhereInput = {
  agents?: AgentListRelationFilter;
  appointments?: AppointmentListRelationFilter;
  contactPreference?: "Option1";
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
