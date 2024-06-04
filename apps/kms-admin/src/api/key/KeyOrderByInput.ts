import { SortOrder } from "../../util/SortOrder";

export type KeyOrderByInput = {
  createdAt?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  keyType?: SortOrder;
  keyValue?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
