import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import AllOffers from "./routes/AllOffersPage";
import { Switch, Route, HashRouter } from "react-router-dom";
import RequirementsPage from "./routes/RequirementsPage";
import CitiesPage from "./routes/CitiesPage";
import AddOfferPage from "./routes/AddOfferPage";
import Nav from "./components/Nav/Nav";
import DefaultPage from "./routes/DefaultPage";
import { useDispatch } from "react-redux";
import { ACTION_FETCH_OFFERS } from "./store/modules/actions";

function App() {
  const dispatch = useDispatch();
  const fetchOffersList = () => dispatch(ACTION_FETCH_OFFERS());

  useEffect(() => {
    fetchOffersList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={AllOffers} />
          <Route exact path="/addoffer" component={AddOfferPage} />
          <Route exact path="/requirements" component={RequirementsPage} />
          <Route exact path="/cities" component={CitiesPage} />
          <Route component={DefaultPage} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
