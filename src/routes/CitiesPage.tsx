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
      <Chart data={data} />
    </main>
  )
}

export default CitiesPage;