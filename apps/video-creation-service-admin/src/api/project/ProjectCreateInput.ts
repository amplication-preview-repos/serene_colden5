import { CampaignWhereUniqueInput } from "../campaign/CampaignWhereUniqueInput";

export type ProjectCreateInput = {
  campaign?: CampaignWhereUniqueInput | null;
  description?: string | null;
  status?: "Option1" | null;
  title?: string | null;
};
