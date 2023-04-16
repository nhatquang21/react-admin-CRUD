import { Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" disabled />
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" fullWidth multiline rows={5} />
    </SimpleForm>
  </Create>
);
