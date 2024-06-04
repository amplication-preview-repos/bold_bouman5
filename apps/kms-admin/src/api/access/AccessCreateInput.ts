import { PolicyCreateNestedManyWithoutAccessesInput } from "./PolicyCreateNestedManyWithoutAccessesInput";

export type AccessCreateInput = {
  accessType?: string | null;
  description?: string | null;
  policies?: PolicyCreateNestedManyWithoutAccessesInput;
};
