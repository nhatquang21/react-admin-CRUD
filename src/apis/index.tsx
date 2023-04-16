import { Auth, SignUpRQ, SignUpRS } from '../types';
import { BASE_URL, LocalStorageKeys } from '../constants';
import { storage } from '../provider/';
import _ from 'lodash';

type Option = {
  method: 'POST' | 'GET' | 'PUT' | 'OPTION' | 'PATCH' | 'DELETE';
  headers: HeadersInit;
  body: string;
};

export const signIn = async (body: Auth.LoginRQ): Promise<Auth.LoginRS> => {
  const options: Option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  const result = await fetch(`${BASE_URL}/login`, { ...options });
  const json = await result.json();
  const statusCode = _.get(json, 'error.statusCode');
  if (statusCode < 200 || statusCode > 204) {
    throw json.error;
  }
  storage.save(LocalStorageKeys.AUTH, json, 30000);

  return json;
};

export const signUp = async (body: SignUpRQ): Promise<SignUpRS> => {
  const options: Option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  const result = await fetch(`${BASE_URL}/signUp`, { ...options });
  const json = await result.json();
  return json;
};

export const logout = async () => {
  storage.remove(LocalStorageKeys.AUTH);
};
