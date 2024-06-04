import { Access } from "../access/Access";
import { JsonValue } from "type-fest";

export type Policy = {
  access?: Access | null;
  createdAt: Date;
  description: string | null;
  id: string;
  policyName: string | null;
  rules: JsonValue;
  updatedAt: Date;
};
