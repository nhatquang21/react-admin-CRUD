import {
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  useNotify,
  usePermissions,
  useRecordContext,
  useRedirect,
} from 'react-admin';

const DishTitle = () => {
  const record = useRecordContext();
  //   console.log(record)
  return <span>Dish {record ? `"${record.id}"` : ''}</span>;
};

export const DishEdit = () => {
  const redirect = useRedirect();

  return (
    <Edit title={<DishTitle />}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <NumberInput source="price" />
      </SimpleForm>
    </Edit>
  );
};
