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
      <Chart data={data} />
    </main>
  );
};

export default RequirementsPage;
