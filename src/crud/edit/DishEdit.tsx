import {
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
  useRecordContext,
  useRedirect,
} from 'react-admin';

const DishTitle = () => {
  const record = useRecordContext();

  return <span>Dish {record ? `"${record.id}"` : ''}</span>;
};

const transform = (data: any) => {
  delete data['id'];
  return data;
};

export const DishEdit = () => {
  const redirect = useRedirect();

  return (
    <Edit redirect="/dishes" transform={transform} title={<DishTitle />}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <NumberInput source="price" />
      </SimpleForm>
    </Edit>
  );
};
