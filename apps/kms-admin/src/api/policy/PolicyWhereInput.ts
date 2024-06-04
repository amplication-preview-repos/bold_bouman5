import { AccessWhereUniqueInput } from "../access/AccessWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PolicyWhereInput = {
  access?: AccessWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  policyName?: StringNullableFilter;
  rules?: JsonFilter;
};
