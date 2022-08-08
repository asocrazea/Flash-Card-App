import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import EditDeck from "./Layout/";
import Home from "./Layout/Home";
import Study from "./Layout/Study";
import CreateDeck from "./Layout/CreateDeck";

/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function App() {
  return (
    <div className="app-routes">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/decks/:deckId/study">
          <Study />
        </Route>
        <Route path="decks/new">
          <CreateDeck />
        </Route>
        <Route path="decks/:deckId/edit">
          <EditDeck />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
