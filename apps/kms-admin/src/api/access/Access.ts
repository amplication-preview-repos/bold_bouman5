import { Policy } from "../policy/Policy";

export type Access = {
  accessType: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  policies?: Array<Policy>;
  updatedAt: Date;
};
