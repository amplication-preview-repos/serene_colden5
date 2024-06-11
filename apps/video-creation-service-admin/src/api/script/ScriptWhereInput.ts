import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ScriptWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
};
