import React from "react";
import { StateModel } from "../../store/modules/models";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import AllOffersPage from "../../routes/AllOffersPage";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

export const mockedStore: StateModel = {
  isNavOpen: false,
  offersList: [
    {
      city: "BARCELONA",
      company: "DOGGO",
      id: 1601903689462,
      link: "",
      notes: "",
      req: ["ts", "css", "react", "js", "node", "redux"],
    },
    {
      city: "WARSAW",
      company: "BEANS",
      id: 1602066958416,
      link: "",
      notes: "",
      req: ["react native", "html", "git", "jira"],
    },
  ],
  searchPhrase: "",
  addedInfo: false,
  editedInfo: false,
  deletedInfo: false,
};

describe("<AllOffersPage />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Provider store={mockStore(mockedStore)}>
          <AllOffersPage />
        </Provider>
      </MemoryRouter>
    );
  });

  afterEach(cleanup);

  test("should display search bar", () => {
    const searchBar = screen.getByPlaceholderText(/search offers/i);
    expect(searchBar).toBeInTheDocument();
  });
});
