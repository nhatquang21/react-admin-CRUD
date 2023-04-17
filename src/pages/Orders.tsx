import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  FunctionField,
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
        <ReferenceField source="employeeId" reference="employees">
          <FunctionField render={(record: any) => record && `${record.name}`} />
        </ReferenceField>
        <ReferenceField source="customerId" reference="customers">
          <FunctionField render={(record: any) => record && `${record.name}`} />
        </ReferenceField>
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
