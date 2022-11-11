import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactData,
  fetchContactsData,
} from 'redux/PhonebookRedax/phonebookThunk';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phoneBook.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAddContact = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContactData({ name, number }));
  };

  useEffect(() => {
    dispatch(fetchContactsData());
  }, [dispatch]);

  const onChangeName = e => {
    setName(e.target.value);
  };
  const onChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handelSubmit = e => {
    e.preventDefault();
    handleAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={onChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
