import { Phonebook } from './Phonebook/Phonebook';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsData } from 'redux/PhonebookRedax/phonebookThunk';


export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContactsData());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
        gap: 10,
      }}
    >
      <h1>Phonebook</h1>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      <ContactList/>
    </div>
  );
};
