import { useSelector, useDispatch } from "react-redux";
import { phoneActions, phoneSelectors } from 'redux/phonebook';
import s from "./Filter.module.css";

const Filter = () => {
  const value = useSelector(state => phoneSelectors.getFilter(state));
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(phoneActions.filter(e.target.value));
  return (
    <>
      <p className={s.title}>Find contacts by name</p>
      <label>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          className={s.input}
        />
      </label>
    </>
  );
};

export default Filter;
