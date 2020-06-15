import { StateModel } from "./models";
import { OfferModel } from "../../models/models";

export const selectIsNavOpen = (state: StateModel) => {
  return state.isNavOpen;
};

export const selectAllOffers = (state: StateModel) => {
  return state.offersList;
};

export const selectAllOffersFromNewest = (state: StateModel) => {
  return state.offersList.sort((a: OfferModel, b: OfferModel) => b.id - a.id);
};

export const selectAllOffersFromOldest = (state: StateModel) => {
  return state.offersList.sort((a: OfferModel, b: OfferModel) => a.id - b.id);
};

export const selectFilteredOffers = (state: StateModel) => {
  return state.offersList.filter((offer: OfferModel) => {
    return (
      offer.company.toLowerCase().includes(state.searchPhrase.toLowerCase()) ||
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

export const selectIsAddedInfoActive = (state: StateModel) => {
  return state.addedInfo;
};

export const selectIsEditedInfoActive = (state: StateModel) => {
  return state.editedInfo;
};

export const selectIsDeletedInfoActive = (state: StateModel) => {
  return state.deletedInfo;
};
