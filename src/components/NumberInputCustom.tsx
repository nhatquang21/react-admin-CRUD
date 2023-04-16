import { NumberInput, TextField, TextInput, useInput } from 'react-admin';
import { useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
const NumberInputCustom = ({ source, ...props }: any) => {
  const input = useInput({ source, ...props });
  const { field, formState, ...rest } = input;

  //console.log('====input', input);
  const onChange = (value: any) => {
    field.onChange(value);
  };
  const value = useMemo(() => {
    return _.get(formState, `defaultValues.${input.id}`, '');
  }, [formState]);

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    // <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
    //   <div>{total}</div>
    // </div>
    <TextInput
      onChange={(e) => {
        onChange(e.target.value);
      }}
      source={source}
      disabled={true}
      {...rest}
    />
  );
};

export default NumberInputCustom;
