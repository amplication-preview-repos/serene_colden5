import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MusicEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="genre" source="genre" />
        <TextInput label="sourceURL" source="sourceUrl" />
      </SimpleForm>
    </Edit>
  );
};
