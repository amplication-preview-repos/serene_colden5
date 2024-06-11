import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type CampaignWhereInput = {
  aspectRatio?: "Option1";
  backgroundMusicIncluded?: BooleanNullableFilter;
  campaignLanguage?: "Option1";
  campaignName?: StringNullableFilter;
  campaignNiche?: "Option1";
  campaignTone?: StringNullableFilter;
  campaignTopic?: StringNullableFilter;
  campaignVoice?: "Option1";
  id?: StringFilter;
  includeBackgroundMusic?: BooleanNullableFilter;
  includeSoundEffects?: BooleanNullableFilter;
  language?: "Option1";
  name?: StringNullableFilter;
  niche?: "Option1";
  projects?: ProjectListRelationFilter;
  soundEffectsIncluded?: BooleanNullableFilter;
  tone?: StringNullableFilter;
  topic?: StringNullableFilter;
  videoAspectRatio?: "Option1";
  videoLength?: "Option1";
  videoLengthDuration?: "Option1";
  voice?: "Option1";
};
