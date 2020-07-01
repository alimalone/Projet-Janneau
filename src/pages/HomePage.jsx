import { Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Contemporaines from "../components/Contemporaines";
import Intemporelles from "../components/Intemporelles";
import Lumineuses from "../components/Lumineuses";
import axios from "axios";

export default function HomePage() {
  const [pvc, setPvc] = useState({
    PVC: [],
  });
  const [alu, setAlu] = useState({
    ALU: [],
  });
  const [bois, setBois] = useState({
    BOIS: [],
  });

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://..."
      )
      .then(({ data }) => {
        setPvc(data);
        setAlu(data);
        setBois(data);
      });
  }, []);

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Contemporaines {...props} pvc={pvc} alu={alu} />}
        />
        <Route
          path="/intemporelles"
          render={(props) => <Intemporelles {...props} pvc={pvc} alu={alu} />}
        />
        <Route
          path="/lumineuses"
          render={(props) => 
            <Lumineuses {...props} pvc={pvc} alu={alu} bois={bois} />
          }
        />
      </Switch>
    </div>
  );
}
