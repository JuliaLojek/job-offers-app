import React, { useEffect } from "react";
import styles from "./Page.module.css";
import { useSelector } from "react-redux";
import { StateModel } from "../store/modules/models";
import { selectReqChartData } from "../store/modules/selectors";

const RequirementsPage: React.FC = () => {
  const data = useSelector((state: StateModel) => selectReqChartData(state));

  useEffect(() => {
    console.log(data);
  });

  return (
    <main className={styles.main}>
      by requirements
    </main>
  )
}

export default RequirementsPage;