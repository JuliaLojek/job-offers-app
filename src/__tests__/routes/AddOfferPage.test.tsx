import React from "react";
import { fireEvent, render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import AddOfferPage from "../../routes/AddOfferPage";
import { Provider } from "react-redux";
// import { createStore } from "redux";
import { MemoryRouter } from "react-router-dom";
// import reducer from "../../store/modules/reducer";
// import { ACTION_ADD_OFFER } from "../../store/modules/actions";
import thunk from "redux-thunk";
// import { OfferModel } from "../../models/models";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("<AddOfferPage />", () => {
  test("should display a blank form", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        {/* <Provider store={createStore(reducer)}> */}
        <Provider store={mockStore()} >
          <AddOfferPage />
        </Provider>
      </MemoryRouter>
    );
    const form = getByTestId("form");
    expect(form).toHaveFormValues({
      companyName: "",
      cityName: "",
      req: "",
      link: "",
      notes: "",
    });
  });

  // test("after filling in the required fields and submitting the form, the form should be blank again and the toast should appear", () => {
  //   const { getByTestId, getByLabelText } = render(
  //     <MemoryRouter>
  //       <Provider store={mockStore()} >
  //         <AddOfferPage />
  //       </Provider>
  //     </MemoryRouter>
  //   );
  //   const form = getByTestId("form");
  //   const companyInput = getByLabelText(/company/i);
  //   const cityInput = getByLabelText(/city/i);
  //   const reqInput = getByLabelText(/req/i);
  //   fireEvent.change(companyInput, { target: { value: "koala" } });
  //   fireEvent.change(cityInput, { target: { value: "barcelona" } });
  //   fireEvent.change(reqInput, { target: { value: "css, js, ts" } });
  //   const newOfferMock = {
  //     id: 11,
  //     company: "koala",
  //     city: "barcelona",
  //     req: ["css", "js", "ts"],
  //     link: "",
  //     notes: "",
  //   };

  //   fireEvent.submit(form);
  //   // expect(addOfferSpy).toHaveBeenCalled();


  //   // expect(form).toHaveFormValues({
  //   //   companyName: "",
  //   //   cityName: "",
  //   //   req: "",
  //   //   link: "",
  //   //   notes: "",
  //   // });
  // })
});
