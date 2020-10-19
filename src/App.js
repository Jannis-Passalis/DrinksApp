import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import FindCocktailsPage from "./components/pages/FindCocktailsPage";
import Navbar from "./components/Navbar";
import ListOfCocktails from "./components/pages/ListOfCocktails";
import DetailsForCocktails from "./components/pages/DetailsForCocktails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          path="/drinks/:cocktailsdetails?"
          component={DetailsForCocktails}
        />
        <Route
          path="/cocktails/:cocktailscategory?"
          component={ListOfCocktails}
        />
        <Route path="/findcocktails" component={FindCocktailsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
