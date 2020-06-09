import React from "react";
import styles from "./Page.module.css";
import Form from "../components/Form/Form";

const AddOfferPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <h3 className={styles.title}>Add new offer:</h3>
      <Form />
    </main>
  );
};

export default AddOfferPage;
