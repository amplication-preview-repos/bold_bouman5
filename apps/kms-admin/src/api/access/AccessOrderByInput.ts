import { SortOrder } from "../../util/SortOrder";

export type AccessOrderByInput = {
  accessType?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
