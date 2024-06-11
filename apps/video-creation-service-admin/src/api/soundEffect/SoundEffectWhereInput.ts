import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SoundEffectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  sourceUrl?: StringNullableFilter;
};
