import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  DeleteButton,
  TextInput,
  usePermissions,
} from 'react-admin';

const dishFilters = [<TextInput label="Search" source="name" alwaysOn />];

const DishesList = (props: any) => {
  const { permissions } = usePermissions();

  return (
    <>
      <List filter={dishFilters}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <NumberField source="price" />
          {permissions === 'admin' || permissions === 'employee' ? (
            <EditButton />
          ) : null}
          {permissions === 'admin' || permissions === 'employee' ? (
            <DeleteButton />
          ) : null}
        </Datagrid>
      </List>
    </>
  );
};

export default DishesList;
