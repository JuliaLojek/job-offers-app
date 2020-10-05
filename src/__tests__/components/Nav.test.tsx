import React from "react";
import { render } from "@testing-library/react";
import Nav from "../../components/Nav/Nav";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore();

describe("<Nav />", () => {
  test("should display four links", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={mockStore()}>
          <Nav />
        </Provider>
      </MemoryRouter>
    );

    expect(getByText(/all offers/i)).toBeInTheDocument();
    expect(getByText(/add new offer/i)).toBeInTheDocument();
    expect(getByText(/top requirements/i)).toBeInTheDocument();
    expect(getByText(/top locations/i)).toBeInTheDocument();
  });
});
