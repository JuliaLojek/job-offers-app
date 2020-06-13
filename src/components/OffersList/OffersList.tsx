import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_FETCH_OFFERS } from "../../store/modules/actions";
import { StateModel } from "../../store/modules/models";
import {
  selectFilteredOffers,
  selectSearchPhrase,
  selectAllOffersFromNewest,
  selectAllOffersFromOldest,
} from "../../store/modules/selectors";
import styles from "./OffersList.module.css";
import OfferCard from "../OfferCard/OfferCard";

const OffersList: React.FC = () => {
  const dispatch = useDispatch();
  const fetchOffersList = () => dispatch(ACTION_FETCH_OFFERS());

  const [sortFromNewest, setSortFromNewest] = useState(true);

  const allOffers = useSelector((state: StateModel) =>
    sortFromNewest
      ? selectAllOffersFromNewest(state)
      : selectAllOffersFromOldest(state)
  );
  const searchPhrase = useSelector((state: StateModel) =>
    selectSearchPhrase(state)
  );
  const searchResults = useSelector((state: StateModel) =>
    selectFilteredOffers(state)
  );
  const offersToDisplay = searchPhrase ? searchResults : allOffers;
  const infoToDipslay = searchPhrase
    ? "No matches!"
    : "You don't have any offers saved yet. Add some!";

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

      <div className={styles.btnGroup}>
        <button
          onClick={() => setSortFromNewest(true)}
          className={
            sortFromNewest
              ? [styles.btn, styles.leftBtn, styles.activeBtn].join(" ")
              : [styles.btn, styles.leftBtn].join(" ")
          }
        >
          newest
        </button>
        <button
          onClick={() => setSortFromNewest(false)}
          className={
            sortFromNewest
              ? [styles.btn, styles.rightBtn].join(" ")
              : [styles.btn, styles.rightBtn, styles.activeBtn].join(" ")
          }
        >
          oldest
        </button>
      </div>

      <div className={styles.listBox}>
        {offersToDisplay.length === 0 ? (
          <div className={styles.infoBox}>
            <p>{infoToDipslay}</p>
          </div>
        ) : (
          offersToDisplay.map((offer) => {
            const { id, company, city, req, link, notes } = offer;
            return (
              <OfferCard
                key={id}
                id={id}
                company={company}
                city={city}
                req={req}
                link={link}
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
