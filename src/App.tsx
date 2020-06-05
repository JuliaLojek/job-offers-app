import React from "react";
import Header from "./components/Header/Header";
import AllOffers from "./routes/AllOffersPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RequirementsPage from "./routes/RequirementsPage";
import CitiesPage from "./routes/CitiesPage";
import AddOfferPage from "./routes/AddOfferPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={AllOffers} />
          <Route path="/addoffer" component={AddOfferPage} />
          <Route exact path="/requirements" component={RequirementsPage} />
          <Route exact path="/cities" component={CitiesPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
