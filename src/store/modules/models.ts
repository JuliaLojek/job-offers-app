import { OfferModel } from "../../models/models";

export enum ACTION_TYPES {
  TOGGLE_NAV = "TOGGLE_NAV",
  FETCH_OFFERS = "FETCH_OFFERS",
  SET_OFFERS = "SET_OFFERS",
  ADD_OFFER = "ADD_OFFER",
  EDIT_OFFER = "EDIT_OFFER",
  DELETE_OFFER = "DELETE_OFFER",
  SET_SEARCH_PHRASE = "SET_SEARCH_PHRASE",
  SHOW_ADDED_INFO = "SHOW_ADDED_INFO",
  SHOW_EDITED_INFO = "SHOW_EDITED_INFO",
  SHOW_DELETED_INFO = "SHOW_DELETED_INFO",
}

export interface ActionModel {
  type: string;
  value: any;
}

export interface StateModel {
  isNavOpen: boolean;
  offersList: OfferModel[];
  searchPhrase: string;
  addedInfo: boolean;
  editedInfo: boolean;
  deletedInfo: boolean;
}
