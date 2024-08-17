import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  address?: SortOrder;
  bathrooms?: SortOrder;
  bedrooms?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  squareMeter?: SortOrder;
  updatedAt?: SortOrder;
};
