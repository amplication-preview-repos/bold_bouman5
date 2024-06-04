import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACCESS_TITLE_FIELD } from "../access/AccessTitle";

export const PolicyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Policies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Access" source="access.id" reference="Access">
          <TextField source={ACCESS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="policyName" source="policyName" />
        <TextField label="rules" source="rules" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
