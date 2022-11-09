import { useDispatch, useSelector } from "react-redux";
import { changeFilterAction } from "redux/PhonebookRedax/sliceFilter";
import { getFilter } from "redux/selector";



export const Filter = () => {
const dispatch = useDispatch()
const filter = useSelector(getFilter)
  
const onChangeName = e => {
  dispatch(changeFilterAction(e.target.value));
};

      return (
      <>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeName}
        />
      </>
    );
  }


