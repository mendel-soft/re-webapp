import { AgentCreateNestedManyWithoutPropertiesInput } from "./AgentCreateNestedManyWithoutPropertiesInput";
import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  agents?: AgentCreateNestedManyWithoutPropertiesInput;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  bathrooms?: number | null;
  bedrooms?: number | null;
  description?: string | null;
  price?: number | null;
  squareMeter?: number | null;
};
