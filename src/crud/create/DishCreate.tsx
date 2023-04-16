import {
  Create,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  useRedirect,
} from 'react-admin';

export const DishCreate = () => {
  const redirect = useRedirect();
  return (
    <Create redirect={'/dishes'}>
      <SimpleForm>
        <TextInput source="name" />
        <NumberInput source="price" />
      </SimpleForm>
    </Create>
  );
};
