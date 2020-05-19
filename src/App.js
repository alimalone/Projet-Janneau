import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeConfig from "./pages/HomeConfig";
import HomePage from "./pages/HomePage";
import "./App.css";




export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/homeConfig/:unique_code" component={HomeConfig}></Route>
        <Route path="/" component={HomePage}></Route>
      </Switch>
    </div>
  );
}
