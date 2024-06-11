import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MusicWhereInput = {
  genre?: StringNullableFilter;
  id?: StringFilter;
  sourceUrl?: StringNullableFilter;
};
