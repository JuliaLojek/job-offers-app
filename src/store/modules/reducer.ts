import { StateModel, ACTION_TYPES, ActionModel } from "./models";

const INITIAL_STATE: StateModel = {
  isNavOpen: false,
  offersList: [],
  searchPhrase: "",
};

export default (state = INITIAL_STATE, action: ActionModel) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_MENU:
      return (state = {
        ...state,
        isNavOpen: !state.isNavOpen,
      });
    case ACTION_TYPES.FETCH_OFFERS:
      return (state = {
        ...state,
        offersList: action.value,
      });
    default:
      return state;
  }
};
