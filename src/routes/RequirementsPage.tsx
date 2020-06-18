import React from "react";
import styles from "./Page.module.css";
import { useSelector } from "react-redux";
import { StateModel } from "../store/modules/models";
import { selectReqChartData } from "../store/modules/selectors";
import Chart from "../components/Chart/Chart";

const RequirementsPage: React.FC = () => {
  const data = useSelector((state: StateModel) => selectReqChartData(state));

  return (
    <main className={styles.main}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>Most common requirements</h2>
        <h3 className={styles.subtitle}>in your job offers</h3>
      </div>

      <div className={styles.chartBox}>
        <Chart data={data} />
      </div>
    </main>
  );
};

export default RequirementsPage;
