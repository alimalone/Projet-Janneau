import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBarIntExt from "./pages/NavBarIntExt";
import HomePage from "./pages/HomePage";
import "./App.css";




export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/navbarintext/:unique_code" component={NavBarIntExt}></Route>
        <Route path="/" component={HomePage}></Route>
      </Switch>
    </div>
  );
}
