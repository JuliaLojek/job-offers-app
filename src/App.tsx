import React from "react";
import Header from "./components/Header/Header";
import AllOffers from "./routes/AllOffersPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RequirementsPage from "./routes/RequirementsPage";
import CitiesPage from "./routes/CitiesPage";
import AddOfferPage from "./routes/AddOfferPage";
import Nav from "./components/Nav/Nav";
import DefaultPage from "./routes/DefaultPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={AllOffers} />
          <Route path="/addoffer" component={AddOfferPage} />
          <Route path="/requirements" component={RequirementsPage} />
          <Route path="/cities" component={CitiesPage} />
          <Route component={DefaultPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
