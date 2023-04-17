import {
  choices,
  Create,
  maxLength,
  minLength,
  PasswordInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
  useTranslate,
} from 'react-admin';
import _ from 'lodash';

const ConfirmPWDValidation = (value: any, allValue: any) => {
  const translate = useTranslate();
  if (value !== allValue.pwd) {
    return translate('error.passwordsDoNotMatch');
  }
};

const validateUsername = [required()];
const validatePWD = [required(), minLength(8), maxLength(16)];
const validateConfPWD = [required(), ConfirmPWDValidation];

const transform = (data: any) => {
  data.roleId = data.role;

  data = _.omit(data, ['confPwd', 'role']);

  return data;
};

export const UserCreate = () => (
  <Create redirect="/users" transform={transform}>
    <SimpleForm reValidateMode="onChange" mode="onChange">
      <TextInput
        sx={{ width: 250 }}
        validate={validateUsername}
        source="username"
      />
      <PasswordInput validate={validatePWD} source="pwd" label="Password" />
      <PasswordInput
        validate={validateConfPWD}
        source="confPwd"
        label="Confirm password"
      />
      <ReferenceInput
        sx={{ width: 250 }}
        validate={required()}
        source="role"
        reference="roles"
      />
    </SimpleForm>
  </Create>
);
