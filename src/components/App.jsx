import { Phonebook } from './Phonebook/Phonebook';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RegistrationForm } from 'Pages/RegistrationPage';
import { Layout } from './Layout/Layout';
import { Authorization } from 'Pages/AutorizationPage';
import { getUser } from 'redux/auth/authOperation';
import PrivateRouts from './PrivatRouts/PrivatPouts';
import PublicRouts from './PublicRouts/PublicRouts';
import Home from 'Pages/Home';
import Contacts from 'Pages/Contacts';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Layout>
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   flexDirection: 'column',
      //   justifyContent: 'flex-start',
      //   alignItems: 'center',
      //   fontSize: 16,
      //   color: '#010101',
      //   gap: 10,
      // }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<PublicRouts />}>
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/authorization" element={<Authorization />} />
          </Route>

          <Route path="/contacts" element={<PrivateRouts />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </div>
    </Layout>
  );
};
