import React from "react";
import styles from "./Page.module.css";
import AddOfferForm from "../components/AddOfferForm/AddOfferForm";

const AllOffersPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <AddOfferForm />
    </main>
  )
}

export default AllOffersPage;