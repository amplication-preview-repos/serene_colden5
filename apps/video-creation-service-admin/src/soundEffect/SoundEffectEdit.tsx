import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SoundEffectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="sourceURL" source="sourceUrl" />
      </SimpleForm>
    </Edit>
  );
};
