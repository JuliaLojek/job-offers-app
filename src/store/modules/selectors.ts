import { StateModel } from "./models";
import { OfferModel } from "../../models/models";

export const selectIsNavOpen = (state: StateModel) => {
  return state.isNavOpen;
};

export const selectAllOffers = (state: StateModel) => {
  return state.offersList;
};

export const selectFilteredOffers = (
  state: StateModel,
  searchPhrase: string
) => {
  return state.offersList.filter((offer: OfferModel) => {
    return (
      offer.city.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      offer.lang.join("").toLowerCase().includes(searchPhrase.toLowerCase()) ||
      offer.req.join("").toLowerCase().includes(searchPhrase.toLowerCase()) ||
      offer.notes.toLowerCase().includes(searchPhrase.toLowerCase())
    );
  });
};
