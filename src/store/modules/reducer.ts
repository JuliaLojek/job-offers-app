import { StateModel, ACTION_TYPES, ActionModel } from "./models";

export const INITIAL_STATE: StateModel = {
  isNavOpen: false,
  offersList: [],
  searchPhrase: "",
};

export default (state = INITIAL_STATE, action: ActionModel) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_NAV:
      return (state = {
        ...state,
        isNavOpen: !state.isNavOpen,
      });
    case ACTION_TYPES.SET_OFFERS:
      return (state = {
        ...state,
        offersList: action.value,
      });
    case ACTION_TYPES.SET_SEARCH_PHRASE:
      return (state = {
        ...state,
        searchPhrase: action.value,
      });
    default:
      return state;
  }
};
