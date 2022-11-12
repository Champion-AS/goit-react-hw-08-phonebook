import { useDispatch, useSelector } from 'react-redux';
import { deleteContactData } from 'redux/PhonebookRedax/phonebookThunk';
import { handleFilteerConnect } from 'redux/selector';
import s from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(handleFilteerConnect);

  const dispatch = useDispatch();
  const handleDeleteUser = id => {
    dispatch(deleteContactData(id));
  };
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.item}>
          <div className={s.contactList}>
            <p className={s.text}>{contact.name}</p>
            <p className={s.text}>{contact.number}</p>
            <button
              className={s.btn}
              onClick={() => handleDeleteUser(contact.id)}
              type="button"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
