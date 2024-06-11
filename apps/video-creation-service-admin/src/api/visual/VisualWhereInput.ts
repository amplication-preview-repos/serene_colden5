import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VisualWhereInput = {
  id?: StringFilter;
  sourceUrl?: StringNullableFilter;
  typeField?: "Option1";
};
