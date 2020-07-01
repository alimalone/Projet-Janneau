import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Interieur from "../components/Interieur";
import Exterieur from "../components/Exterieur";
import axios from "axios";

export default function HomeConfig() {
  const { unique_code } = useParams();
  const [view, setView] = useState();
  const viewSwitch = () => setView((view) => !view);
  
  const [blanc, setBlanc] = useState("");
  const [colorInt0, setColorInt0] = useState([]);
  const [handlesExt0, setHandlesExt0] = useState([]);

  const [gris, setGris] = useState("");
  const [colorInt1, setColorInt1] = useState([]);
  const [handlesExt1, setHandlesExt1] = useState([]);

  const [chene, setChene] = useState("");
  const [colorInt2, setColorInt2] = useState([]);
  const [handlesExt2, setHandlesExt2] = useState([]);

  const [noyer, setNoyer] = useState("");
  const [colorInt3, setColorInt3] = useState([]);
  const [handlesExt3, setHandlesExt3] = useState([]);

  const [acajou, setAcajou] = useState("");
  const [colorInt4, setColorInt4] = useState([]);
  const [handlesExt4, setHandlesExt4] = useState([]);

  const [rougeFon, setRougeFon] = useState("");
  const [colorInt5, setColorInt5] = useState([]);
  const [handlesExt5, setHandlesExt5] = useState([]);

  const [bleuAcier, setBleuAcier] = useState("");
  const [colorInt6, setColorInt6] = useState([]);
  const [handlesExt6, setHandlesExt6] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://...`
      )
      .then(({ data }) => {
        setBlanc(
          data.choix_couleurs.exterior_colors[0].exterior_color_unique_code
        );
        setColorInt0(data.choix_couleurs.exterior_colors[0]);
        setHandlesExt0(data.choix_couleurs.exterior_colors[0].handles);

        setGris(
          data.choix_couleurs.exterior_colors[1].exterior_color_unique_code
        );
        setColorInt1(data.choix_couleurs.exterior_colors[1]);
        setHandlesExt1(data.choix_couleurs.exterior_colors[1].handles);

        setChene(
          data.choix_couleurs.exterior_colors[2].exterior_color_unique_code
        );
        setColorInt2(data.choix_couleurs.exterior_colors[2]);
        setHandlesExt2(data.choix_couleurs.exterior_colors[2].handles);
        
        setNoyer(
          data.choix_couleurs.exterior_colors[3].exterior_color_unique_code
        );
        setColorInt3(data.choix_couleurs.exterior_colors[3]);
        setHandlesExt3(data.choix_couleurs.exterior_colors[3].handles);
        
        setAcajou(
          data.choix_couleurs.exterior_colors[4].exterior_color_unique_code
        );
        setColorInt4(data.choix_couleurs.exterior_colors[4]);
        setHandlesExt4(data.choix_couleurs.exterior_colors[4].handles);
        
        setRougeFon(
          data.choix_couleurs.exterior_colors[5].exterior_color_unique_code
        );
        setColorInt5(data.choix_couleurs.exterior_colors[5]);
        setHandlesExt5(data.choix_couleurs.exterior_colors[5].handles);
        
        setBleuAcier(
          data.choix_couleurs.exterior_colors[6].exterior_color_unique_code
        );
        setColorInt6(data.choix_couleurs.exterior_colors[6]);
        setHandlesExt6(data.choix_couleurs.exterior_colors[6].handles);
      });
  }, []);
  return (
    <div>
      {view ? (
        <div>
          <button
            onClick={() => {
              viewSwitch();
            }}
          >
            Exterieur
          </button>
          <Interieur
            colorInt0={colorInt0}
            colorInt1={colorInt1}
            colorInt2={colorInt2}
            colorInt3={colorInt3}
            colorInt4={colorInt4}
            colorInt5={colorInt5}
            colorInt6={colorInt6}
          />
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              viewSwitch();
            }}
          >
            Interieur
          </button>
          <Exterieur
            blanc={blanc}
            gris={gris}
            chene={chene}
            noyer={noyer}
            acajou={acajou}
            rougeFon={rougeFon}
            bleuAcier={bleuAcier}
            handlesExt0={handlesExt0}
            handlesExt1={handlesExt1}
            handlesExt2={handlesExt2}
            handlesExt3={handlesExt3}
            handlesExt4={handlesExt4}
            handlesExt5={handlesExt5}
            handlesExt6={handlesExt6}
          />
        </div>
      )}
    </div>
  );
}
