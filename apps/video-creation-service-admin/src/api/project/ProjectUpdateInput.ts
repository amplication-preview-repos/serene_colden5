import { CampaignWhereUniqueInput } from "../campaign/CampaignWhereUniqueInput";

export type ProjectUpdateInput = {
  campaign?: CampaignWhereUniqueInput | null;
  description?: string | null;
  status?: "Option1" | null;
  title?: string | null;
};
