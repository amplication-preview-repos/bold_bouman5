import { AccessWhereUniqueInput } from "../access/AccessWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type PolicyUpdateInput = {
  access?: AccessWhereUniqueInput | null;
  description?: string | null;
  policyName?: string | null;
  rules?: InputJsonValue;
};
