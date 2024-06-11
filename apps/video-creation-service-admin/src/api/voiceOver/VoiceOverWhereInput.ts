import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VoiceOverWhereInput = {
  id?: StringFilter;
  language?: StringNullableFilter;
  sourceUrl?: StringNullableFilter;
};
