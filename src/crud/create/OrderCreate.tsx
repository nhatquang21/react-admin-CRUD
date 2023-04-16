import {
  ArrayInput,
  Create,
  ReferenceInput,
  SimpleForm,
  SimpleFormIterator,
  useRecordContext,
  TextInput,
  NumberInput,
  useGetList,
  useRedirect,
} from 'react-admin';
import _ from 'lodash';
const OrderCreate = () => {
  const { data, isLoading } = useGetList('dishes');
  const redirect = useRedirect();

  if (isLoading) return <div>Loading...</div>;
  return (
    <Create
      redirect={'/orders'}
      transform={(value: any) => {
        value.dishList = _.map(value.dishList, (it) => {
          return {
            dishId: it.id,
            quantity: it.dishQuantity,
          };
        });

        _.remove(value.dishList, (it: any) => {
          return it.quantity === null;
        });

        return value;
      }}
    >
      <SimpleForm record={{ dishList: data }}>
        <ReferenceInput
          row={5}
          fullWidth={true}
          source="employeeId"
          reference="employees"
        />
        <ReferenceInput
          row={5}
          fullWidth={true}
          source="customerId"
          reference="customers"
        />
        <ArrayInput label="Menu" source="dishList">
          <SimpleFormIterator inline>
            <TextInput source="name" helperText={false} disabled />
            <NumberInput source="price" helperText={false} disabled />
            <NumberInput min={0} source="dishQuantity" helperText={false} />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};

export { OrderCreate };
