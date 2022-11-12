import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from 'redux/PhonebookRedax/sliceFilter';
import { getFilter } from 'redux/selector';
import s from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeName = e => {
    dispatch(changeFilterAction(e.target.value));
  };

  return (
    <div className={s.form}>
      <p className={s.label}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeName}
      />
    </div>
  );
};
