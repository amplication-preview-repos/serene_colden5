import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CAMPAIGN_TITLE_FIELD } from "./CampaignTitle";

export const CampaignShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="aspectRatio" source="aspectRatio" />
        <BooleanField
          label="backgroundMusicIncluded"
          source="backgroundMusicIncluded"
        />
        <TextField label="campaignLanguage" source="campaignLanguage" />
        <TextField label="campaignName" source="campaignName" />
        <TextField label="campaignNiche" source="campaignNiche" />
        <TextField label="campaignTone" source="campaignTone" />
        <TextField label="campaignTopic" source="campaignTopic" />
        <TextField label="campaignVoice" source="campaignVoice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField
          label="includeBackgroundMusic"
          source="includeBackgroundMusic"
        />
        <BooleanField
          label="includeSoundEffects"
          source="includeSoundEffects"
        />
        <TextField label="language" source="language" />
        <TextField label="name" source="name" />
        <TextField label="niche" source="niche" />
        <TextField label="socialAccounts" source="socialAccounts" />
        <TextField label="socialChannels" source="socialChannels" />
        <BooleanField
          label="soundEffectsIncluded"
          source="soundEffectsIncluded"
        />
        <TextField label="tone" source="tone" />
        <TextField label="topic" source="topic" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="videoAspectRatio" source="videoAspectRatio" />
        <TextField label="videoLength" source="videoLength" />
        <TextField label="videoLengthDuration" source="videoLengthDuration" />
        <TextField label="voice" source="voice" />
        <ReferenceManyField
          reference="Project"
          target="campaignId"
          label="Projects"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Campaign"
              source="campaign.id"
              reference="Campaign"
            >
              <TextField source={CAMPAIGN_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
