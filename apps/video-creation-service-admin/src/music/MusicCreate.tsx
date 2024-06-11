import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MusicCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="genre" source="genre" />
        <TextInput label="sourceURL" source="sourceUrl" />
      </SimpleForm>
    </Create>
  );
};
