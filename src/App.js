import './App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { SearchResultsPage } from "./pages/SearchResultPage/SearchResultsPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/search" exact>
          <SearchResultsPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
