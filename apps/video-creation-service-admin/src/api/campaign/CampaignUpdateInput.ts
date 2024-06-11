import { ProjectUpdateManyWithoutCampaignsInput } from "./ProjectUpdateManyWithoutCampaignsInput";

export type CampaignUpdateInput = {
  aspectRatio?: "Option1" | null;
  backgroundMusicIncluded?: boolean | null;
  campaignLanguage?: "Option1" | null;
  campaignName?: string | null;
  campaignNiche?: "Option1" | null;
  campaignTone?: string | null;
  campaignTopic?: string | null;
  campaignVoice?: "Option1" | null;
  includeBackgroundMusic?: boolean | null;
  includeSoundEffects?: boolean | null;
  language?: "Option1" | null;
  name?: string | null;
  niche?: "Option1" | null;
  projects?: ProjectUpdateManyWithoutCampaignsInput;
  socialAccounts?: Array<"Option1">;
  socialChannels?: Array<"Option1">;
  soundEffectsIncluded?: boolean | null;
  tone?: string | null;
  topic?: string | null;
  videoAspectRatio?: "Option1" | null;
  videoLength?: "Option1" | null;
  videoLengthDuration?: "Option1" | null;
  voice?: "Option1" | null;
};
