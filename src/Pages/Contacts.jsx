import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import React from 'react';
import { Phonebook } from '../components/Phonebook/Phonebook';

export default function Contacts() {
  return (
    <>
      <h1>Phonebook</h1>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
