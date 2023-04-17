import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  FunctionField,
  List,
  ReferenceField,
  TextField,
  usePermissions,
} from 'react-admin';

export const UserList = () => {
  const { permissions } = usePermissions();

  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="username" />
        <DateField showTime source="createdOn" />
        <DateField showTime source="updatedOn" />
        <ReferenceField source="roleId" reference="roles">
          <FunctionField render={(record: any) => record && `${record.name}`} />
        </ReferenceField>
        {permissions === 'admin' ? <EditButton /> : null}
        {permissions === 'admin' ? <DeleteButton /> : null}
      </Datagrid>
    </List>
  );
};
