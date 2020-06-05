import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_FETCH_OFFERS } from "../../store/modules/actions";
import { StateModel } from "../../store/modules/models";
import { selectAllOffers } from "../../store/modules/selectors";
import styles from "./OffersList.module.css";
import OfferCard from "../OfferCard/OfferCard";

const OffersList: React.FC = () => {
  const dispatch = useDispatch();
  const fetchOffersList = () => dispatch(ACTION_FETCH_OFFERS());
  const offers = useSelector((state: StateModel) => selectAllOffers(state));

  useEffect(() => {
    fetchOffersList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.mainBox}>
      <h3 className={styles.title}>All offers:</h3>
      <div className={styles.listBox}>
        {offers.length === 0
        ?
        <div className={styles.infoBox}><p>You don't have any offers saved yet. Add some!</p></div>
        :
        offers.map((offer) => {
          const { id, company, city, req, notes } = offer;
          return (
            <OfferCard
              key={id}
              id={id}
              company={company}
              city={city}
              req={req}
              notes={notes}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OffersList;
