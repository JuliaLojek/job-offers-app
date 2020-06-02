import { OfferModel } from "../../models/models";

export enum ACTION_TYPES {
  TOGGLE_MENU = "TOGGLE_MENU",
  FETCH_OFFERS = "FETCH_OFFERS",
  SET_OFFERS = "SET_OFFERS",
  ADD_OFFER = "ADD_OFFER",
  DELETE_OFFER = "DELETE_OFFER",
  SEARCH_OFFER = "SEARCH_OFFER",
}

export interface ActionModel {
  type: string;
  value: any;
}

export interface StateModel {
  isNavOpen: boolean;
  offersList: OfferModel[];
  searchPhrase: string;
}
