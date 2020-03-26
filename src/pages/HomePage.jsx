import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Pvc from "../components/Pvc";
import Aluminium from "../components/Aluminium";
import Bois from "../components/Bois";

export default function HomePage() {
  return (
    <div className="DoorsHome">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">PVC</Link>
          </li>
          <li>
            <Link to="/Aluminium">Aluminium</Link>
          </li>
          <li>
            <Link to="/Bois">Bois</Link>
          </li>
        </ul>
        <Route exact path="/" component={Pvc} />
        <Route path="/Aluminium" component={Aluminium} />
        <Route path="/Bois" component={Bois} />
      </BrowserRouter>
    </div>
  );
}
