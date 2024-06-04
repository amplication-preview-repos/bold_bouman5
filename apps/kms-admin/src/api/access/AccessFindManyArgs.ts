import { AccessWhereInput } from "./AccessWhereInput";
import { AccessOrderByInput } from "./AccessOrderByInput";

export type AccessFindManyArgs = {
  where?: AccessWhereInput;
  orderBy?: Array<AccessOrderByInput>;
  skip?: number;
  take?: number;
};
