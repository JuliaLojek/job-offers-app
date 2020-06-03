import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch></Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
