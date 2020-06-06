import React from "react";
import styles from "./SearchBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { StateModel } from "../../store/modules/models";
import { selectSearchPhrase } from "../../store/modules/selectors";
import { ACTION_SET_SEARCH_PHRASE } from "../../store/modules/actions";

const SearchBar: React.FC = () => {
  const searchPhrase = useSelector((state: StateModel) =>
    selectSearchPhrase(state)
  );
  const dispatch = useDispatch();
  const changeSearchPhrase = (phrase: string) => dispatch(ACTION_SET_SEARCH_PHRASE(phrase));

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    changeSearchPhrase(event.currentTarget.value);
  };

  return (
    <div className={styles.searchBox}>
      <input
        className={styles.input}
        type="text"
        value={searchPhrase}
        placeholder="search offers"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
