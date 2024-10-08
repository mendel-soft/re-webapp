import { SortOrder } from "../../util/SortOrder";

export type AgentOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
