import React from "react";
import styles from "./Page.module.css";
import AddOfferForm from "../components/AddOfferForm/AddOfferForm";
import OffersList from "../components/OffersList/OffersList";

const AllOffersPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <AddOfferForm />
      <OffersList />
    </main>
  )
}

export default AllOffersPage;