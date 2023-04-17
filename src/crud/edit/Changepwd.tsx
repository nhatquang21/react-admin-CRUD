import {
  maxLength,
  minLength,
  PasswordInput,
  required,
  SimpleForm,
  useNotify,
  useTranslate,
} from 'react-admin';
import _ from 'lodash';
import { dataProvider } from '../../provider/dataProvider';
import { storage } from '../../provider';
import { LocalStorageKeys } from '../../constants';
import { FunctionComponent } from 'react';

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
const ChangePWD: FunctionComponent = () => {
  const notify = useNotify();

  const translate = useTranslate();
  const handleSubmit = async (values: any) => {
    try {
      values = transform(values);
      const params = {
        data: { ...values },
      };
      await dataProvider.remote('changePWD', params, 'PATCH');
      notify(translate(`message.changePWDSuccess`), { type: 'success' });
    } catch (e: any) {
      notify(translate(`message.oldPwdWrong`), { type: 'error' });
    }
  };

  return (
    <>
      <h1> {translate('buttons.changePWD')}</h1>
      <SimpleForm
        onSubmit={handleSubmit}
        reValidateMode="onChange"
        mode="onBlur"
      >
        <PasswordInput
          sx={{ width: 300 }}
          validate={validatePWD}
          label={translate('inputs.pwd')}
          source="pwd"
        />
        <PasswordInput
          sx={{ width: 300 }}
          validate={validateNewPwd}
          label={translate('inputs.newPwd')}
          source="newPwd"
        />
        <PasswordInput
          sx={{ width: 300 }}
          validate={validateConfPWD}
          label={translate('inputs.confPwd')}
          source="confPwd"
        />
      </SimpleForm>
    </>
  );
};

export default ChangePWD;
