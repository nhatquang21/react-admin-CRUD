import {
  DateInput,
  Edit,
  maxLength,
  minLength,
  PasswordInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from 'react-admin';
import _ from 'lodash';
import { dataProvider } from '../../provider/dataProvider';
import { load } from '../../provider/storage';
import { storage } from '../../provider';
import { LocalStorageKeys } from '../../constants';

const ConfirmPWDValidation = (value: any, allValue: any) => {
  if (value !== allValue.newPwd) {
    return 'The passwords do not match';
  }
};

const NewPwdValidation = (value: any, allValue: any) => {
  if (value === allValue.pwd) {
    return 'The new password is the same as the current password';
  }
};
const validatePWD = [required(), minLength(4), maxLength(16)];
const validateNewPwd = [
  required(),
  minLength(8),
  maxLength(16),
  NewPwdValidation,
];
const validateConfPWD = [required(), ConfirmPWDValidation];

const transform = (data: any) => {
  data = _.omit(data, ['confPwd']);

  return data;
};
const ChangePWD = () => {
  return (
    <>
      <h1>Change password</h1>
      <SimpleForm
        onSubmit={async (values) => {
          let item = storage.load(LocalStorageKeys.AUTH);

          values = transform(values);
          const params = {
            data: { ...values },
          };
          dataProvider.remote('changePWD', params, 'PATCH');
        }}
        reValidateMode="onChange"
        mode="onBlur"
      >
        <PasswordInput
          sx={{ width: 300 }}
          validate={validatePWD}
          source="pwd"
          label="Current password"
        />
        <PasswordInput
          sx={{ width: 300 }}
          validate={validateNewPwd}
          source="newPwd"
          label="New password"
        />
        <PasswordInput
          sx={{ width: 300 }}
          validate={validateConfPWD}
          source="confPwd"
          label="Confirm password"
        />
      </SimpleForm>
    </>
  );
};

export default ChangePWD;
