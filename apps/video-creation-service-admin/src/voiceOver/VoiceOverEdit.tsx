import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const VoiceOverEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="language" source="language" />
        <TextInput label="sourceURL" source="sourceUrl" />
      </SimpleForm>
    </Edit>
  );
};
