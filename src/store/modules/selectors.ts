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

const offersToChartData = (dataItems: string[]) => {
  let dataObject: { [key: string]: number } = {};
  dataItems.forEach((dataItem) => {
    dataObject[dataItem] = dataObject[dataItem] + 1 || 1;
  });
  const dataArray = Object.entries(dataObject).map(([name, value]) => {
    return { name, value };
  });
  interface ChartData {
    name: string;
    value: number;
  }
  const data = dataArray
    .sort((a: ChartData, b: ChartData) => b.value - a.value)
    .slice(0, 10);
  return data;
};

export const selectCityChartData = (state: StateModel) => {
  const cities = state.offersList.map(offer => offer.city);
  return offersToChartData(cities);
};

export const selectReqChartData = (state: StateModel) => {
  let reqs: string[] = [];
  state.offersList.forEach(offer => {
    reqs = [...reqs, ...offer.req];
  });
  return offersToChartData(reqs);
};