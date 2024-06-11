import { SortOrder } from "../../util/SortOrder";

export type CampaignOrderByInput = {
  aspectRatio?: SortOrder;
  backgroundMusicIncluded?: SortOrder;
  campaignLanguage?: SortOrder;
  campaignName?: SortOrder;
  campaignNiche?: SortOrder;
  campaignTone?: SortOrder;
  campaignTopic?: SortOrder;
  campaignVoice?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  includeBackgroundMusic?: SortOrder;
  includeSoundEffects?: SortOrder;
  language?: SortOrder;
  name?: SortOrder;
  niche?: SortOrder;
  socialAccounts?: SortOrder;
  socialChannels?: SortOrder;
  soundEffectsIncluded?: SortOrder;
  tone?: SortOrder;
  topic?: SortOrder;
  updatedAt?: SortOrder;
  videoAspectRatio?: SortOrder;
  videoLength?: SortOrder;
  videoLengthDuration?: SortOrder;
  voice?: SortOrder;
};
