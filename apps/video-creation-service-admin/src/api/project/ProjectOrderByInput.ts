import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  campaignId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
