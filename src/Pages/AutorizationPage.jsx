import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginForm } from 'redux/auth/authOperation';
import s from './Pages.module.css';

export const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const inputs = {
    email: setEmail,
    password: setPassword,
  };

  const handleInputLogin = e => {
    inputs[e.target.name](e.target.value);
  };

  const handleFormSubmitAutoriz = e => {
    e.preventDefault();
    const userInfo = {
      email,
      password,
    };
    dispatch(loginForm(userInfo));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleFormSubmitAutoriz} className={s.form}>
      <label className={s.label}>
        Your email address
        <input
          required
          name="email"
          value={email}
          onChange={handleInputLogin}
          type="email"
          placeholder="Your email address"
        />
      </label>
      <label className={s.label}>
        Enter password
        <input
          required
          type="password"
          name="password"
          value={password}
          onChange={handleInputLogin}
          placeholder="Enter password"
        />
      </label>

      <button type="submit" className={s.btn}>
        Autorization
      </button>
    </form>
  );
};
