import { AuthProvider, useNotify } from 'react-admin';
import * as apis from '../apis';
import { Auth } from '../types.d';
import { storage } from './index';
import { LocalStorageKeys } from '../constants';

const login = async (body: Auth.LoginRQ): Promise<boolean> => {
  try {
    await apis.signIn(body);
    return true;
  } catch (error) {
    console.log('err', error);
    throw error;
  }
};

const logout = async () => {
  await apis.logout();
  return Promise.resolve();
};

const checkError = (error: any) => {
  const status = error.status;

  if (status === 401) {
    storage.remove(LocalStorageKeys.AUTH);
    return Promise.reject();
  }
  if (status === 403) {
    return Promise.reject({ redirectTo: '/', logoutUser: false });
  }
  return Promise.resolve();
};

const checkAuth = (params: any) => {
  return storage.load(LocalStorageKeys.AUTH)
    ? Promise.resolve()
    : Promise.reject();
};

const getPermissions = (params: any) => {
  const role = storage.load(LocalStorageKeys.AUTH).role;
  console.log(role);
  return Promise.resolve(role);
};

export const authProvider: AuthProvider = {
  login,
  logout,
  checkAuth,
  checkError,
  getPermissions,
};
