import React from "react";
import { Switch, Route } from "react-router-dom";


import HomePage from "./pages/HomePage";
import "./App.css";

export default function App() {
  
  return (
    <div className="App">
      <Switch>
        
        <Route path="/" component={HomePage}></Route>
      </Switch>
    </div>
  );
}
