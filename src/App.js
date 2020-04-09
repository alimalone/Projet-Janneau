import React from "react";
import { Switch, Route } from "react-router-dom";
import Configurateur from "./pages/Configurateur";
import Contemporaines from "./components/Contemporaines";
import Intemporelles from "./components/Intemporelles";
import Lumineuses from "./components/Lumineuses";
import HomePage from "./pages/HomePage";
import "./App.css";

export default function App() {
  return (

    <div className="App">
      <nav>
      <HomePage />
      </nav>
      <Switch>
        <Route exact path="/" component={Contemporaines}></Route>
        <Route path="/intemporelles" component={Intemporelles}></Route>
        <Route path="/lumineuses" component={Lumineuses}></Route>
        <Route path="/configurateur/:name" component={Configurateur}></Route>
      </Switch>
    </div>
  );
}
