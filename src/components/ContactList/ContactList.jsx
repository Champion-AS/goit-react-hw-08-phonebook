import { useDispatch, useSelector } from 'react-redux';
import { deleteContactData } from 'redux/PhonebookRedax/phonebookThunk';
import { handleFilteerConnect } from 'redux/selector';

export const ContactList = () => {
  const contacts = useSelector(handleFilteerConnect);
  

  const dispatch = useDispatch();
  const handleDeleteUser = id => {
    dispatch(deleteContactData(id));
  };
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button onClick={() => handleDeleteUser(contact.id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
  }


