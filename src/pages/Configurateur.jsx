import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style/Configurateur.scss";
import axios from "axios";
//import ColorChoiceExt from "../components/ColorChoiceExt";
import HandleChoiceExt from "../components/HandleChoiceExt";

export default function Configurateur() {
  const { unique_code } = useParams();
  const [showColorExt, setShowColorExt] = useState(true);

  const [showHandleExt, setShowHandleExt] = useState(false);

  const [blanc, setBlanc] = useState([]);
  const [handles, setHandles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://janneau-config-v2.herokuapp.com/api/v2/models/${unique_code}?user_email=marc.fauchreau@janneau.com&user_token=SY7L1Kn1X8-ZKv1VG8cx`
      )
      .then(({ data }) => {
        setBlanc(data.choix_couleurs.exterior_colors[0].exterior_color_unique_code);
        setHandles(data.choix_couleurs.exterior_colors[0]);
      });
  }, []);

  //const saisie = document.getElementById("colorValue").value;

  return (
    <div className="configuratorBoxExt">
      <img src={`/photos/${unique_code}.jpg`} alt="" />
      <div className="modifiersPosition">
        <div className="colorModifier" type="button">
          <button onClick={() => setShowColorExt(!showColorExt)}>
            icone color modifier
          </button>

          {showColorExt && (
            <div className="colorChoice">
              
                  <button onClick={() => setShowHandleExt(!showHandleExt)}>
                    {blanc}
                  </button>
                
             
            </div>
          )}

          {showHandleExt && (
            <div>
              <HandleChoiceExt item={handles} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
