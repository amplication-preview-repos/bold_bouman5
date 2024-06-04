import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const KeyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <TextInput label="keyType" source="keyType" />
        <TextInput label="keyValue" multiline source="keyValue" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
