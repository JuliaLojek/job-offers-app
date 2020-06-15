import { StateModel, ACTION_TYPES, ActionModel } from "./models";

export const INITIAL_STATE: StateModel = {
  isNavOpen: false,
  offersList: [],
  searchPhrase: "",
  addedInfo: false,
  editedInfo: false,
  deletedInfo: false,
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
    case ACTION_TYPES.SHOW_ADDED_INFO:
      return (state = {
        ...state,
        addedInfo: action.value,
      });
    case ACTION_TYPES.SHOW_EDITED_INFO:
      return (state = {
        ...state,
        editedInfo: action.value,
      });
    case ACTION_TYPES.SHOW_DELETED_INFO:
      return (state = {
        ...state,
        deletedInfo: action.value,
      });
    default:
      return state;
  }
};
