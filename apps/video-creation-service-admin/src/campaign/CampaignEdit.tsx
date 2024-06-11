import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProjectTitle } from "../project/ProjectTitle";

export const CampaignEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="aspectRatio"
          label="aspectRatio"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput
          label="backgroundMusicIncluded"
          source="backgroundMusicIncluded"
        />
        <SelectInput
          source="campaignLanguage"
          label="campaignLanguage"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="campaignName" source="campaignName" />
        <SelectInput
          source="campaignNiche"
          label="campaignNiche"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="campaignTone" source="campaignTone" />
        <TextInput label="campaignTopic" multiline source="campaignTopic" />
        <SelectInput
          source="campaignVoice"
          label="campaignVoice"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput
          label="includeBackgroundMusic"
          source="includeBackgroundMusic"
        />
        <BooleanInput
          label="includeSoundEffects"
          source="includeSoundEffects"
        />
        <SelectInput
          source="language"
          label="language"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="name" source="name" />
        <SelectInput
          source="niche"
          label="niche"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="projects"
          reference="Project"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          label="socialAccounts"
          source="socialAccounts"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <SelectArrayInput
          label="socialChannels"
          source="socialChannels"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput
          label="soundEffectsIncluded"
          source="soundEffectsIncluded"
        />
        <TextInput label="tone" source="tone" />
        <TextInput label="topic" multiline source="topic" />
        <SelectInput
          source="videoAspectRatio"
          label="videoAspectRatio"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="videoLength"
          label="videoLength"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="videoLengthDuration"
          label="videoLengthDuration"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="voice"
          label="voice"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
