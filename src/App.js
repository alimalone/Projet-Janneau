import React from 'react';


import { Switch, Route } from "react-router-dom";
import Contemporaines from "./components/Contemporaines";
import Intemporelles from "./components/Intemporelles";
import Lumineuses from "./components/Lumineuses";
import HomePage from "./pages/HomePage";
import DoorLike from "./components/DoorLike";

import './App.css';



export default function App() {
  return (
    
    <div className="App">
      <HomePage/>
      
      <Switch>


<Route exact path="/" component={Contemporaines}></Route>
<Route path="/intemporelles" component={Intemporelles}></Route>
<Route path="/lumineuses" component={Lumineuses}></Route>
<Route path="/like" component={DoorLike}></Route>
</Switch>
      
      
      
     
      
      
    </div>
  );
}


