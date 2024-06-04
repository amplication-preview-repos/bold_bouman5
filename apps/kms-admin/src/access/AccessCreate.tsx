import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PolicyTitle } from "../policy/PolicyTitle";

export const AccessCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="accessType" source="accessType" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="policies"
          reference="Policy"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PolicyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
