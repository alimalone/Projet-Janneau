

import React from "react";
import { Switch, Route } from "react-router-dom";
import Contemporaines from "../components/Contemporaines";
import Intemporelles from "../components/Intemporelles";
import Lumineuses from "../components/Lumineuses";
import ButtonsChoices from "../components/ButtonsChoices";





export default function HomePage() {
  return (
    <div>
      
      <ButtonsChoices/>
      
      <Switch>

      <Route path="/contemporaines" component={Contemporaines}></Route>
      <Route path="/intemporelles" component={Intemporelles}></Route>
      <Route path="/lumineuses" component={Lumineuses}></Route>
      </Switch>
      </div>
      
      
    
  );
}
