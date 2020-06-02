import { StateModel } from "./modules/models";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./modules/reducer";
import thunk from "redux-thunk";

export default function configureStore(initialState: StateModel) {
  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
