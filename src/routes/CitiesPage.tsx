import React from "react";
import styles from "./Page.module.css";
import { useSelector } from "react-redux";
import { StateModel } from "../store/modules/models";
import { selectCityChartData } from "../store/modules/selectors";
import Chart from "../components/Chart/Chart";

const CitiesPage: React.FC = () => {
  const data = useSelector((state: StateModel) => selectCityChartData(state));

  return (
    <main className={styles.main}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>Most common cities</h2>
        <h3 className={styles.subtitle}>in your job offers</h3>
      </div>

      <div className={styles.chartBox}>
        <Chart data={data} />
      </div>
    </main>
  );
};

export default CitiesPage;
