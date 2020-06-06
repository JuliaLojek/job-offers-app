import React from "react";
import styles from "./Page.module.css";
import OffersList from "../components/OffersList/OffersList";
import SearchBar from "../components/SearchBar/SearchBar";

const AllOffersPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <SearchBar />
      <OffersList />
    </main>
  )
}

export default AllOffersPage;