

import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Contemporaines from "../components/Contemporaines";
import Intemporelles from "../components/Intemporelles";






export default function HomePage() {
  return (
    <div className="DoorsHome">
      <div className="choice">
      <Link to="/Contemporaines">
          <button>Contemporaines</button>
        </Link>
        <Link to="/Intemporelles">
          <button>Intemporelles</button>
        </Link>
        
      
      </div>
      
      
      <Switch>
        
            
        
        <Route exact path="/" component={Contemporaines}></Route>
        <Route path="/Intemporelles" component={Intemporelles}></Route>
        
      </Switch>
    </div>
  );
}
