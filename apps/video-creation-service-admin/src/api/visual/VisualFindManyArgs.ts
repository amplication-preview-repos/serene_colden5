import { VisualWhereInput } from "./VisualWhereInput";
import { VisualOrderByInput } from "./VisualOrderByInput";

export type VisualFindManyArgs = {
  where?: VisualWhereInput;
  orderBy?: Array<VisualOrderByInput>;
  skip?: number;
  take?: number;
};
