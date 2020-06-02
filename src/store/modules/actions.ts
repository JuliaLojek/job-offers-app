import { OfferModel } from "../../models/models";
import { ACTION_TYPES, StateModel } from "./models";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

export const ACTION_TOGGLE_MENU = () => {
  return {
    type: ACTION_TYPES.TOGGLE_MENU,
  };
};

// export const ACTION_FETCH_OFFERS = () => {
// return (dispatch) => {
//   return new Promise((resolve, reject) => {
//     const offersListData = localStorage.getItem("myJobOffers");
//     let offersList: OfferModel[];
//     if (typeof offersListData === "string") {
//       offersList = JSON.parse(offersListData);
//     } else {
//       offersList = [];
//     }
//     resolve(offersList);
//     reject(new Error("Fetching data from local storage failed"));
//   })
//     .then(response => dispatch(ACTION_SET_OFFERS(response)))
//   ;
// };

export const ACTION_FETCH_OFFERS = (): ThunkAction<
  void,
  StateModel,
  unknown,
  Action
> => async (dispatch) => {
  const offersList: OfferModel[] = await fetchOffers();
  function fetchOffers() {
    const offersListData = localStorage.getItem("myJobOffers");
    let offersList: OfferModel[];
    if (typeof offersListData === "string") {
      offersList = JSON.parse(offersListData);
    } else {
      offersList = [];
    }
    return Promise.resolve(offersList);
  }
  dispatch(ACTION_SET_OFFERS(offersList));
};

export const ACTION_SET_OFFERS = (offersList: OfferModel[]) => {
  return {
    type: ACTION_TYPES.SET_OFFERS,
    value: offersList,
  };
};

export const ACTION_ADD_OFFER = (offer: OfferModel) => {
  return {
    type: ACTION_TYPES.ADD_OFFER,
    value: offer,
  };
};

export const ACTION_DELETE_OFFER = (offerId: string) => {
  return {
    type: ACTION_TYPES.DELETE_OFFER,
    value: offerId,
  };
};

export const ACTION_SEARCH_OFFER = (phrase: string) => {
  return {
    type: ACTION_TYPES.SEARCH_OFFER,
    value: phrase,
  };
};
