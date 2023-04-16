import {
  ArrayInput,
  Button,
  Datagrid,
  DateInput,
  DateTimeInput,
  Edit,
  FormDataConsumer,
  List,
  ListButton,
  NumberField,
  NumberInput,
  ReferenceInput,
  Resource,
  ShowButton,
  SimpleForm,
  SimpleFormIterator,
  TextField,
  TextInput,
  TopToolbar,
  useRecordContext,
} from 'react-admin';
import OrderEditForm from '../../components/OrderEditForm';
import _ from 'lodash';

const OrderTitle = () => {
  const record = useRecordContext();
  return <span>Edit order with id: {record ? `${record.id}` : ''}</span>;
};

const OrderEdit = () => {
  return (
    <Edit
      transform={(data) => {
        data = _.omit(data, [
          'orderDishes',
          'dishes',
          'totalBill',
          'id',
          'createdOn',
        ]);

        _.map(data.newMapping, (it: any) => {
          delete it['price'];
          delete it['name'];
          delete it['dishTotalPrice'];
        });

        _.remove(data.newMapping, (it: any) => {
          return it.dishQuantity === 0;
        });
        data.newMapping = Object.values(data.newMapping);
        data['dishList'] = _.map(data.newMapping, (it: any) => {
          return {
            dishId: it.id,
            quantity: it.dishQuantity,
          };
        });
        delete data['newMapping'];

        return data;
      }}
      title={<OrderTitle />}
      queryOptions={{
        meta: { filter: { include: ['orderDishes', 'dishes'] } },
      }}
    >
      <OrderEditForm />
    </Edit>
  );
};

export { OrderEdit };
