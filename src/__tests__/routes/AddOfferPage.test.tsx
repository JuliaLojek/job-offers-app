import React from "react";
import { render } from "@testing-library/react";
import AddOfferPage from "../../routes/AddOfferPage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { MemoryRouter } from "react-router-dom";
import reducer from "../../store/modules/reducer";

describe("<AddOfferPage />", () => {
  test("should display a blank form", () => {
    const { getByTestId, getByLabelText } = render(
      <MemoryRouter>
        <Provider store={createStore(reducer)}>
          <AddOfferPage />
        </Provider>
      </MemoryRouter>
    );
    // const companyInput = getByLabelText(/company name/i);
    // expect(companyInput).toBeInTheDocument();
    const form = getByTestId("form");
    expect(form).toHaveFormValues({
      companyName: "",
      cityName: "",
      req: "",
      link: "",
      notes: "",
    });
  });
});
