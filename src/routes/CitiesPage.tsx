import React, { useEffect } from "react";
import styles from "./Page.module.css";
import { useSelector } from "react-redux";
import { StateModel } from "../store/modules/models";
import { selectCityChartData } from "../store/modules/selectors";

const CitiesPage: React.FC = () => {
  const data = useSelector((state: StateModel) => selectCityChartData(state));

  useEffect(() => {
    console.log(data);
  });

  return (
    <main className={styles.main}>
      by cities
    </main>
  )
}

export default CitiesPage;