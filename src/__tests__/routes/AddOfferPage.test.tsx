import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import AddOfferPage from "../../routes/AddOfferPage";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("<AddOfferPage />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Provider store={mockStore()}>
          <AddOfferPage />
        </Provider>
      </MemoryRouter>
    );
  });

  test("should display a blank form", () => {
    const form = screen.getByTestId("form");
    expect(form).toHaveFormValues({
      companyName: "",
      cityName: "",
      req: "",
      link: "",
      notes: "",
    });
  });

  test("after filling in the required fields and submitting the form, the form should be blank again and the toast should appear", () => {
    const form = screen.getByTestId("form");
    const companyInput = screen.getByLabelText(/company/i);
    const cityInput = screen.getByLabelText(/city/i);
    const reqInput = screen.getByLabelText(/req/i);

    fireEvent.change(companyInput, { target: { value: "koala" } });
    fireEvent.change(cityInput, { target: { value: "barcelona" } });
    fireEvent.change(reqInput, { target: { value: "css, js, ts" } });

    fireEvent.submit(form);

    expect(form).toHaveFormValues({
      companyName: "",
      cityName: "",
      req: "",
      link: "",
      notes: "",
    });

    expect(screen.getByText(/added/i)).toBeInTheDocument();
  });
});
