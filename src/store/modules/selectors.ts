import { StateModel } from "./models";

export const selectAllOffers = (state: StateModel) => {
  return state.offersList;
};