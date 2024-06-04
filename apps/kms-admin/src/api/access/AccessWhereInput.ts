import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PolicyListRelationFilter } from "../policy/PolicyListRelationFilter";

export type AccessWhereInput = {
  accessType?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  policies?: PolicyListRelationFilter;
};
