import { Policy as TPolicy } from "../api/policy/Policy";

export const POLICY_TITLE_FIELD = "policyName";

export const PolicyTitle = (record: TPolicy): string => {
  return record.policyName?.toString() || String(record.id);
};
