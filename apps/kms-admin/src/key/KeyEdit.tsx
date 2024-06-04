import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const KeyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <TextInput label="keyType" source="keyType" />
        <TextInput label="keyValue" multiline source="keyValue" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
