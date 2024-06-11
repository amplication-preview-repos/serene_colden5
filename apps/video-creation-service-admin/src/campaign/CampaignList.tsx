import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CampaignList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Campaigns"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
