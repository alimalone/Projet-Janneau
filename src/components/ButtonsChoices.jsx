import React from "react";
import { Switch, Route } from "react-router-dom";
import Contemporaines from "./Contemporaines";
import Intemporelles from "./Intemporelles";
import Lumineuses from "./Lumineuses";


export default function ButtonsChoices() {
    return (
      <Switch>


      <Route path="/contemporaines" component={Contemporaines}></Route>
      <Route path="/intemporelles" component={Intemporelles}></Route>
      <Route path="/lumineuses" component={Lumineuses}></Route>
      </Switch>
    )
}