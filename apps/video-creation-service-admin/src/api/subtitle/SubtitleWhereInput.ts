import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SubtitleWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
};
