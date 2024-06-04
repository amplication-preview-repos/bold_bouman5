import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AccessTitle } from "../access/AccessTitle";

export const PolicyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="access.id" reference="Access" label="Access">
          <SelectInput optionText={AccessTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="policyName" source="policyName" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
