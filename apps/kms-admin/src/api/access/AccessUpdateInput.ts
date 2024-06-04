import { PolicyUpdateManyWithoutAccessesInput } from "./PolicyUpdateManyWithoutAccessesInput";

export type AccessUpdateInput = {
  accessType?: string | null;
  description?: string | null;
  policies?: PolicyUpdateManyWithoutAccessesInput;
};
