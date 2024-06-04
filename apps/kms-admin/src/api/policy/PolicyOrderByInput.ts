import { SortOrder } from "../../util/SortOrder";

export type PolicyOrderByInput = {
  accessId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  policyName?: SortOrder;
  rules?: SortOrder;
  updatedAt?: SortOrder;
};
