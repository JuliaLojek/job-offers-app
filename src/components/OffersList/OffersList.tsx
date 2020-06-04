import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_FETCH_OFFERS } from "../../store/modules/actions";
import { StateModel } from "../../store/modules/models";
import { selectAllOffers } from "../../store/modules/selectors";

const OffersList: React.FC = () => {
  const dispatch = useDispatch();
  const fetchOffersList = () => dispatch(ACTION_FETCH_OFFERS());
  const offers = useSelector((state: StateModel) => selectAllOffers(state));

  useEffect(() => {
    fetchOffersList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ul>
    {offers.map(offer => {
      return <li key={offer.id}>
        <h4>{offer.city}</h4>
    <p>{offer.req.join(", ")}</p>
    <p>{offer.notes}</p>
      </li>
    })}
  </ul>
};

export default OffersList;