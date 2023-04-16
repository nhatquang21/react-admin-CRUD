import { Datagrid, List, TextField } from 'react-admin';

export const CustomerList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="address" />
      <TextField source="phoneNumber" />
    </Datagrid>
  </List>
);
