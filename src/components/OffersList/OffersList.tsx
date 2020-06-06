import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_FETCH_OFFERS } from "../../store/modules/actions";
import { StateModel } from "../../store/modules/models";
import {
  selectAllOffers,
  selectFilteredOffers,
  selectSearchPhrase,
} from "../../store/modules/selectors";
import styles from "./OffersList.module.css";
import OfferCard from "../OfferCard/OfferCard";

const OffersList: React.FC = () => {
  const dispatch = useDispatch();
  const fetchOffersList = () => dispatch(ACTION_FETCH_OFFERS());
  const searchResults = useSelector((state: StateModel) =>
    selectFilteredOffers(state)
  );
  const searchPhrase = useSelector((state: StateModel) =>
    selectSearchPhrase(state)
  );
  const allOffers = useSelector((state: StateModel) => selectAllOffers(state));
  const offersToDisplay = searchPhrase ? searchResults : allOffers;
  const infoToDipslay = searchPhrase ? "No matches!" : "You don't have any offers saved yet. Add some!";

  useEffect(() => {
    fetchOffersList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.mainBox}>
      {searchPhrase ? (
        <h3 className={styles.title}>Search results:</h3>
      ) : (
        <h3 className={styles.title}>All offers:</h3>
      )}

      <div className={styles.listBox}>
        {offersToDisplay.length === 0 ? (
          <div className={styles.infoBox}>
            <p>{infoToDipslay}</p>
          </div>
        ) : (
          offersToDisplay.map((offer) => {
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
          })
        )}
      </div>
    </section>
  );
};

export default OffersList;
