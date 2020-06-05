import React from "react";
import styles from "./Page.module.css";
import OffersList from "../components/OffersList/OffersList";

const AllOffersPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <OffersList />
    </main>
  )
}

export default AllOffersPage;