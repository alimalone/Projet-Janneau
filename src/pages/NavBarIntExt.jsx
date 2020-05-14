import React, { useState, useEffect } from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";
import Interieur from "../components/Interieur";
import Exterieur from "../components/Exterieur";
import axios from "axios";

export default function NavBarIntExt() {
  const { unique_code } = useParams();

  const [blanc, setBlanc] = useState("");
//const [colorInt0, setColorInt0] = useState([]);
  const [handlesExt0, setHandlesExt0] = useState([]);

  const [gris, setGris] = useState("");
  //const [colorInt1, setColorInt1] = useState([]);
  const [handlesExt1, setHandlesExt1] = useState([]);

  const [chene, setChene] = useState("");
 // const [colorInt2, setColorInt2] = useState([]);
  const [handlesExt2, setHandlesExt2] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://janneau-config-v2.herokuapp.com/api/v2/models/${unique_code}?user_email=marc.fauchreau@janneau.com&user_token=SY7L1Kn1X8-ZKv1VG8cx`
      )
      .then(({ data }) => {
        setBlanc(
          data.choix_couleurs.exterior_colors[0].exterior_color_unique_code
        );
       // setColorInt0(data.choix_couleurs.exterior_colors[0]);
        setHandlesExt0(data.choix_couleurs.exterior_colors[0].handles);

        setGris(
          data.choix_couleurs.exterior_colors[1].exterior_color_unique_code
        );
       // setColorInt1(data.choix_couleurs.exterior_colors[1]);
        setHandlesExt1(data.choix_couleurs.exterior_colors[1].handles);

        setChene(
          data.choix_couleurs.exterior_colors[2].exterior_color_unique_code
        );
        //setColorInt2(data.choix_couleurs.exterior_colors[2]);
        setHandlesExt2(data.choix_couleurs.exterior_colors[2].handles);
      });
  }, []);
  return (
    <div>
      <Link to={`exterieur/${unique_code}`}>
        <button>Exterieur</button>
      </Link>
      <Link to={`interieur/${unique_code}`}>
        <button>Interieur</button>
      </Link>

      <Switch>
        <Route
          exact
          path="/exterieur"
          render={(props) => (
            <Exterieur
              {...props}
              blanc={blanc}
              gris={gris}
              chene={chene}
              handlesExt0={handlesExt0}
              handlesExt1={handlesExt1}
              handlesExt2={handlesExt2}
            />
          )}
        />

        <Route path="/interieur">
          <Interieur />
        </Route>
      </Switch>
    </div>
  );
}
