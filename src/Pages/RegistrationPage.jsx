import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationForm } from 'redux/auth/authOperation';

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
          setName('')
          setPassword('')
          setEmail('')
          setRepPassword('')
        } else {
          alert('Passwords do not match');
        }
    };
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Your name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInput}
          required
          placeholder="Your name"
        />
      </label>
      <label>
        Your email address
        <input
          required
          name="email"
          value={email}
          onChange={handleInput}
          type="email"
          placeholder="Your email address"
        />
      </label>
      <label>
        Enter password
        <input
          required
          type="password"
          name="password"
          value={password}
          onChange={handleInput}
          placeholder="Enter password"
        />
      </label>
      <label>
        Repeat password
        <input
          required
          name="repPassword"
          type="password"
          value={repPassword}
          onChange={handleInput}
          placeholder="Repeat password"
        />
      </label>
      <button type="submit">Registration</button>
    </form>
  );
};