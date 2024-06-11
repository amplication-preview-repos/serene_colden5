import { CampaignWhereUniqueInput } from "../campaign/CampaignWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProjectWhereInput = {
  campaign?: CampaignWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
