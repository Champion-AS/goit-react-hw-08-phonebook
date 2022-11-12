import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationForm } from 'redux/auth/authOperation';
import s from './Pages.module.css';

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repPassword, setRepPassword] = useState('');
  const dispatch = useDispatch();

  const inputs = {
    name: setName,
    email: setEmail,
    password: setPassword,
    repPassword: setRepPassword,
  };

  const handleInput = e => {
    inputs[e.target.name](e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (password === repPassword) {
      const userInfo = {
        name,
        email,
        password,
      };
      dispatch(registrationForm(userInfo));
      setName('');
      setPassword('');
      setEmail('');
      setRepPassword('');
    } else {
      alert('Passwords do not match');
    }
  };
  return (
    <form onSubmit={handleFormSubmit} className={s.form}>
      <label className={s.label}>
        Your name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleInput}
          required
          placeholder="Your name"
        />
      </label>
      <label className={s.label}>
        Your email address
        <input
          className={s.input}
          required
          name="email"
          value={email}
          onChange={handleInput}
          type="email"
          placeholder="Your email address"
        />
      </label>
      <label className={s.label}>
        Enter password
        <input
          className={s.input}
          required
          type="password"
          name="password"
          value={password}
          onChange={handleInput}
          placeholder="Enter password"
        />
      </label>
      <label className={s.label}>
        Repeat password
        <input
          className={s.input}
          required
          name="repPassword"
          type="password"
          value={repPassword}
          onChange={handleInput}
          placeholder="Repeat password"
        />
      </label>
      <button type="submit" className={s.btn}>
        Registration
      </button>
    </form>
  );
};
