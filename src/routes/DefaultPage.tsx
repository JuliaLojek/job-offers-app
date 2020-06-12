import React, { useState, useEffect } from "react";
import styles from "./Page.module.css";
import { Redirect } from "react-router-dom";

const DefaultPage: React.FC = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => setRedirect(true), 3000);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.infoBox}>
        <p>This page doesn't exist</p>
        <p>You'll be redirected to the home page</p>
      </div>
      {redirect ? <Redirect to="/" /> : null}
    </main>
  );
};

export default DefaultPage;
