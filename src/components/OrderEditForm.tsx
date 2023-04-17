import {
  ArrayInput,
  DateTimeInput,
  FormDataConsumer,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  useGetList,
  useRecordContext,
  useTranslate,
} from 'react-admin';
import _ from 'lodash';
import NumberInputCustom from './NumberInputCustom';


const OrderEditForm = (props: any) => {
  let record = useRecordContext();
  let translate = useTranslate();
  const orderDishes = record.orderDishes;
  const dishes = record.dishes;

  const { data } = useGetList('dishes');

  const dishesMapping = _.reduce(
    data,
    (res: any, it: any) => {
      res = { ...res, [it?.id]: { ..._.omit(it, 'id') } };
      return res;
    },
    {}
  );
  const mapping = _.map(orderDishes, (it) => ({
    ...it,
    ...dishesMapping[it.dishId],
  }));

  const orderMapping = _.reduce(
    orderDishes,
    (res: any, it: any) => {
      res = {
        ...res,
        [it?.dishId]: it.dishQuantity,
      };
      return res;
    },
    {}
  );

  const newMapping = _.map(data, (it) => ({
    ...it,
    dishQuantity: orderMapping[it.id] ?? 0,
    dishTotalPrice: 0,
  }));
  // console.log('newMapping', newMapping);
  // const orderMapping = _.reduce(
  //   orderDishes,
  //   (res: any, it: any) => {
  //     res = {
  //       ...res,
  //       [it?.dishId]:
  //         it.dishQuantity
  //       ,
  //     };
  //     return res;
  //   },
  //   {}
  // );

  // const mapping = _.map(orderDishes, (it) => ({
  //   ...it,
  //   quantity: dishesMapping[it.dishId] ?? 0,
  // }));

  return (
    <>
      <SimpleForm record={{ ...record, newMapping }}>
        <TextInput source="id" disabled />
        <NumberInput source="totalBill" />
        <DateTimeInput source="createdOn" disabled />
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
        <ArrayInput
          label={translate('resources.menu.name')}
          source="newMapping"
        >
          <SimpleFormIterator inline disableAdd disableClear>
            <TextInput
              label={translate('resources.menu.fields.dishId')}
              source="name"
              helperText={false}
              disabled
            />
            <NumberInput
              label={translate('resources.menu.fields.price')}
              source="price"
              helperText={false}
              disabled
            />
            <NumberInput
              label={translate('resources.menu.fields.quantity')}
              min={0}
              source="dishQuantity"
              helperText={false}
            />
            <FormDataConsumer>
              {({ formData, scopedFormData, getSource, ...rest }) => {
                // console.log('==scopeformdata', scopedFormData);
                // console.log('==formdata', formData);
                const { dishQuantity, price } = scopedFormData;

                let currentItemID = scopedFormData.id;
                let currentItemIdx = _.findIndex(formData.newMapping, {
                  id: currentItemID,
                });
                const currentItem = formData.newMapping[currentItemIdx];
                const quantity =
                  currentItem.dishQuantity ?? scopedFormData.dishQuantity;
                const total = quantity * scopedFormData.price;
                _.set(currentItem, 'dishTotalPrice', total);
                const currentMapping = _.map(formData.newMapping, (it) => ({
                  ...it,
                }));
                _.set(currentMapping, currentItemIdx, { ...currentItem });
                _.set(formData, 'newMapping', [...currentMapping]);
                let newTotalBill = 0;
                _.map(formData.newMapping, (it) => {
                  newTotalBill += it.dishQuantity * it.price;
                });
                _.set(formData, 'totalBill', newTotalBill);
                _.set(formData, 'dishTotalPrice', total);

                // console.log('====formData', formData, total);
                return (
                  <NumberInputCustom
                    total={total}
                    source={getSource ? getSource('dishTotalPrice') : ''}
                    {...rest}
                  />
                );
              }}
            </FormDataConsumer>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </>
  );
};

export default OrderEditForm;
