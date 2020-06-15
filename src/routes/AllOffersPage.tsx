import React from "react";
import styles from "./Page.module.css";
import OffersList from "../components/OffersList/OffersList";
import SearchBar from "../components/SearchBar/SearchBar";
import Toast from "../components/Toast/Toast";
import { useSelector } from "react-redux";
import { StateModel } from "../store/modules/models";
import {
  selectIsEditedInfoActive,
  selectIsDeletedInfoActive,
} from "../store/modules/selectors";

const AllOffersPage: React.FC = () => {
  const isEditedInfoActive = useSelector((state: StateModel) =>
    selectIsEditedInfoActive(state)
  );
  const isDeletedInfoActive = useSelector((state: StateModel) =>
    selectIsDeletedInfoActive(state)
  );

  return (
    <React.Fragment>
      <main className={styles.main}>
        <SearchBar />
        <OffersList />
      </main>
      <Toast type="edited" isActive={isEditedInfoActive} />
      <Toast type="removed" isActive={isDeletedInfoActive} />
    </React.Fragment>
  );
};

export default AllOffersPage;
