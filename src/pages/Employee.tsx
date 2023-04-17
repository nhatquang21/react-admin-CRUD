import {
  BooleanField,
  Datagrid,
  FunctionField,
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
      <ReferenceField source="userId" reference="users">
        <FunctionField
          render={(record: any) => record && `${record.username}`}
        />
      </ReferenceField>
    </Datagrid>
  </List>
);
