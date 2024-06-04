import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type KeyWhereInput = {
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  keyType?: StringNullableFilter;
  keyValue?: StringNullableFilter;
  name?: StringNullableFilter;
};
