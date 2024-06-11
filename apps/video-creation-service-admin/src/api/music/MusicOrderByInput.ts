import { SortOrder } from "../../util/SortOrder";

export type MusicOrderByInput = {
  createdAt?: SortOrder;
  genre?: SortOrder;
  id?: SortOrder;
  sourceUrl?: SortOrder;
  updatedAt?: SortOrder;
};
