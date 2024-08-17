import { AgentUpdateManyWithoutPropertiesInput } from "./AgentUpdateManyWithoutPropertiesInput";
import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  agents?: AgentUpdateManyWithoutPropertiesInput;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  bathrooms?: number | null;
  bedrooms?: number | null;
  description?: string | null;
  price?: number | null;
  squareMeter?: number | null;
};
