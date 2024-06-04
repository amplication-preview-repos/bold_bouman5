import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AccessTitle } from "../access/AccessTitle";

export const PolicyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="access.id" reference="Access" label="Access">
          <SelectInput optionText={AccessTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="policyName" source="policyName" />
        <div />
      </SimpleForm>
    </Create>
  );
};
