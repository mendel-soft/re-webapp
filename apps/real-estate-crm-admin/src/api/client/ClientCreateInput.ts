import { AgentCreateNestedManyWithoutClientsInput } from "./AgentCreateNestedManyWithoutClientsInput";
import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  agents?: AgentCreateNestedManyWithoutClientsInput;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  contactPreference?: "Option1" | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
