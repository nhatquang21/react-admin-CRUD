import {
  BooleanField,
  Datagrid,
  List,
  ReferenceField,
  TextField,
} from 'react-admin';

export const EmployeeList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <BooleanField source="status" />
      <ReferenceField source="userId" reference="users" />
    </Datagrid>
  </List>
);
