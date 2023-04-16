import {
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from 'react-admin';
import moment from 'moment';
import _ from 'lodash';

export const UserEdit = () => {
  const transformData = (data: any) => {
    data = _.pick(data, ['roleId']);
    data.updatedOn = moment().toISOString();
    return data;
  };
  return (
    <Edit transform={(data) => transformData(data)}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="username" disabled />
        <DateInput source="createdOn" disabled />
        <ReferenceInput source="roleId" reference="roles" />
      </SimpleForm>
    </Edit>
  );
};
