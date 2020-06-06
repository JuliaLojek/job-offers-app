import { StateModel } from "./models";
import { OfferModel } from "../../models/models";

export const selectIsNavOpen = (state: StateModel) => {
  return state.isNavOpen;
};

export const selectAllOffers = (state: StateModel) => {
  return state.offersList;
};

export const selectFilteredOffers = (state: StateModel) => {
  return state.offersList.filter((offer: OfferModel) => {
    return (
      offer.city.toLowerCase().includes(state.searchPhrase.toLowerCase()) ||
      offer.req
        .join("")
        .toLowerCase()
        .includes(state.searchPhrase.toLowerCase()) ||
      offer.notes.toLowerCase().includes(state.searchPhrase.toLowerCase())
    );
  });
};

export const selectSearchPhrase = (state: StateModel) => {
  return state.searchPhrase;
};
