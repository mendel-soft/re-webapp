import { AgentUpdateManyWithoutClientsInput } from "./AgentUpdateManyWithoutClientsInput";
import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  agents?: AgentUpdateManyWithoutClientsInput;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  contactPreference?: "Option1" | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
};
