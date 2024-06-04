import { Key as TKey } from "../api/key/Key";

export const KEY_TITLE_FIELD = "name";

export const KeyTitle = (record: TKey): string => {
  return record.name?.toString() || String(record.id);
};
