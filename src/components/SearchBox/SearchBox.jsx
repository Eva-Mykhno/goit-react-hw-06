import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filter/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.searchContainer}>
      <p className={s.title}> Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        placeholder="Enter name..."
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
