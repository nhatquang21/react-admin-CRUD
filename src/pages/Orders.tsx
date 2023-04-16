import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  NumberField,
  ReferenceField,
  TextField,
  usePermissions,
} from 'react-admin';

export const OrderList = () => {
  const { permissions } = usePermissions();

  return (
    <List filter={{ include: [{ relation: 'orderDishes' }] }}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <NumberField source="totalBill" />
        <DateField showTime source="createdOn" />
        <ReferenceField source="employeeId" reference="employees" />
        <ReferenceField source="customerId" reference="customers" />
        {permissions === 'admin' || permissions === 'employee' ? (
          <EditButton />
        ) : null}
        {permissions === 'admin' || permissions === 'employee' ? (
          <DeleteButton />
        ) : null}
      </Datagrid>
    </List>
  );
};
