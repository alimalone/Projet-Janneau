import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style/Configurateur.scss";
import axios from "axios";
import ColorExtBlanc from "../components/ColorChoiceExt/ColorExtBlanc";
import ColorExtGris from "../components/ColorChoiceExt/ColorExtGris";
import ColorExtChene from "../components/ColorChoiceExt/ColorExtChene";

export default function Configurateur() {
  const { unique_code } = useParams();
  const [showColorExt, setShowColorExt] = useState(true);

  const [blanc, setBlanc] = useState([]);
  const [custom0, setCustom0] = useState([]);

  const [gris, setGris] = useState([]);
  const [handles1, setHandles1] = useState([]);

  const [chene, setChene] = useState([]);
  const [handles2, setHandles2] = useState([]);



  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://janneau-config-v2.herokuapp.com/api/v2/models/${unique_code}?user_email=marc.fauchreau@janneau.com&user_token=SY7L1Kn1X8-ZKv1VG8cx`
      )
      .then(({ data }) => {
        setBlanc(data.choix_couleurs.exterior_colors[0].exterior_color_unique_code
        );
        setCustom0(data.choix_couleurs.exterior_colors[0]
        );

        setGris(data.choix_couleurs.exterior_colors[1].exterior_color_unique_code
        );
        setHandles1(data.choix_couleurs.exterior_colors[1]
        );
        setChene(data.choix_couleurs.exterior_colors[2].exterior_color_unique_code
        );
        setHandles2(data.choix_couleurs.exterior_colors[2]
        );
      });
  }, []);

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
              <ColorExtBlanc color={blanc} custom={custom0} />
              <ColorExtGris  color={gris} handlesExt={handles1}/>
              <ColorExtChene color={chene} handlesExt={handles2}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
