import { SortOrder } from "../../util/SortOrder";

export type ScriptOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  updatedAt?: SortOrder;
};
