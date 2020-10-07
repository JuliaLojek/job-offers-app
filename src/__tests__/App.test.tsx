import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { INITIAL_STATE } from "../store/modules/reducer";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("navigation works", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={mockStore(INITIAL_STATE)}>
          <App />
        </Provider>
      </MemoryRouter>
    );
  });

  afterEach(cleanup);

  test("redirects to 'add new offer page'", () => {
    const link = screen.getByText(/add new offer/i);
    fireEvent.click(link);
    expect(screen.getByText(/required fields/i)).toBeInTheDocument();
  });

  test("redirects to 'top requirements page'", () => {
    const link = screen.getByText(/top requirements/i);
    fireEvent.click(link);
    expect(screen.getByText(/most common requirements/i)).toBeInTheDocument();
  });
});
