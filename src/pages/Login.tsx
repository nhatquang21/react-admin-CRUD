// in src/MyLoginPage.js
import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';

const MyLoginPage = (props: { theme?: any }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    login({ username, password }, '/').catch(() =>
      notify('Invalid username or password')
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        type="input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        name="pwd"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">login</button>
    </form>
  );
};

export default MyLoginPage;
