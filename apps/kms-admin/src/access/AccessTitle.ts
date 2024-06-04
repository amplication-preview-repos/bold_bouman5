import { Access as TAccess } from "../api/access/Access";

export const ACCESS_TITLE_FIELD = "accessType";

export const AccessTitle = (record: TAccess): string => {
  return record.accessType?.toString() || String(record.id);
};
