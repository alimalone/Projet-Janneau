import React from 'react';
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import './App.css';


export default function App() {
  return (
    
    <div className="App">
    
    <Switch>
      <Route path="/" component={HomePage}/>
    </Switch>
      
      
    </div>
  );
}


