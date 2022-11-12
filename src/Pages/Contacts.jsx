import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import React from 'react';
import { Phonebook } from '../components/Phonebook/Phonebook';
import s from './Pages.module.css';

export default function Contacts() {
  return (
    <>
      <h1 className={s.title}>Phonebook</h1>
      <Phonebook />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
