import { OfferModel } from "../../models/models";
import { ACTION_TYPES, StateModel } from "./models";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

const fetchOffersListFromLS = () => {
  return new Promise((resolve, reject) => {
    const offersListData = localStorage.getItem("myJobOffers");
    resolve(offersListData);
    reject(new Error("Fetching data from local storage failed"));
  }).then((response) => {
    if (typeof response === "string") {
      return JSON.parse(response);
    } else {
      return [];
    }
  });
};

export const ACTION_TOGGLE_NAV = () => {
  return {
    type: ACTION_TYPES.TOGGLE_NAV,
  };
};

export const ACTION_FETCH_OFFERS = (): ThunkAction<
  Promise<any>,
  StateModel,
  unknown,
  Action
> => async (dispatch) => {
  return fetchOffersListFromLS().then((response) =>
    dispatch(ACTION_SET_OFFERS(response))
  );
};

export const ACTION_SET_OFFERS = (offersList: OfferModel[]) => {
  return {
    type: ACTION_TYPES.SET_OFFERS,
    value: offersList,
  };
};

export const ACTION_ADD_OFFER = (
  offer: OfferModel
): ThunkAction<Promise<any>, StateModel, unknown, Action> => async (
  dispatch
) => {
  return fetchOffersListFromLS()
    .then((prevList) => {
      return [...prevList, offer];
    })
    .then((newList) => {
      localStorage.setItem("myJobOffers", JSON.stringify(newList));
    })
    .then(() => dispatch(ACTION_FETCH_OFFERS()));
};

export const ACTION_EDIT_OFFER = (
  offer: OfferModel
): ThunkAction<Promise<any>, StateModel, unknown, Action> => async (
  dispatch
) => {
  return fetchOffersListFromLS()
    .then((prevList) => {
      return prevList.map((prevOffer: OfferModel) => {
        return prevOffer.id === offer.id ? offer : prevOffer;
      });
    })
    .then((newList) => {
      localStorage.setItem("myJobOffers", JSON.stringify(newList));
    })
    .then(() => dispatch(ACTION_FETCH_OFFERS()));
};

export const ACTION_DELETE_OFFER = (
  offerId: number
): ThunkAction<Promise<any>, StateModel, unknown, Action> => async (
  dispatch
) => {
  fetchOffersListFromLS()
    .then((prevList) => {
      const newList = prevList.filter(
        (offer: OfferModel) => offer.id !== offerId
      );
      return newList;
    })
    .then((newList) => {
      localStorage.setItem("myJobOffers", JSON.stringify(newList));
    })
    .then(() => dispatch(ACTION_FETCH_OFFERS()));
};

export const ACTION_SET_SEARCH_PHRASE = (phrase: string) => {
  return {
    type: ACTION_TYPES.SET_SEARCH_PHRASE,
    value: phrase,
  };
};
