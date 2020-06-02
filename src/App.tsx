import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_FETCH_OFFERS } from "./store/modules/actions";
import { selectAllOffers } from "./store/modules/selectors";
import { StateModel } from "./store/modules/models";

function App() {
  const dispatch = useDispatch();
  const getOffers = () => dispatch(ACTION_FETCH_OFFERS());
  const offersList = useSelector((state: StateModel) => selectAllOffers(state));

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <div className="App">
      {offersList.map((offer) => {
        return <p key={offer.id}>{offer.city}</p>;
      })}
    </div>
  );
}

export default App;
