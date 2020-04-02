import React from 'react';
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";



export default function App() {
  return (
    
    <div className="App">
    <h1>Logo JANNEAU</h1>
    <Switch>
      <Route path="/" component={HomePage}/>
    </Switch>
      
      
    </div>
  );
}


