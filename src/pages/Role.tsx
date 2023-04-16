import { Datagrid, List, TextField } from 'react-admin';

export const RoleList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
);
