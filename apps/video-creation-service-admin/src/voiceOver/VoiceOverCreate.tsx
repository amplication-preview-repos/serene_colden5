import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const VoiceOverCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="language" source="language" />
        <TextInput label="sourceURL" source="sourceUrl" />
      </SimpleForm>
    </Create>
  );
};
