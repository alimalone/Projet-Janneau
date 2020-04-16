import React from "react";
import { Switch, Route } from "react-router-dom";
import Configurateur from "./pages/Configurateur";
import HomePage from "./pages/HomePage";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/configurateur/:name" component={Configurateur}></Route>
        <Route path="/" component={HomePage}></Route>
      </Switch>
    </div>
  );
}
