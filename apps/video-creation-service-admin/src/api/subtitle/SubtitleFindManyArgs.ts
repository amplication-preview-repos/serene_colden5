import { SubtitleWhereInput } from "./SubtitleWhereInput";
import { SubtitleOrderByInput } from "./SubtitleOrderByInput";

export type SubtitleFindManyArgs = {
  where?: SubtitleWhereInput;
  orderBy?: Array<SubtitleOrderByInput>;
  skip?: number;
  take?: number;
};
