import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style/Configurateur.scss";
import axios from "axios";
//import ColorChoiceExt from "../components/ColorChoiceExt";
//import HandleChoiceExt from "../components/HandleChoiceExt";

export default function Configurateur() {
  const { unique_code } = useParams();
  const [showColorExt, setShowColorExt] = useState(true);
  
  const [showHandleExt, setShowHandleExt] = useState(true);

  const [door, setDoor] = useState({
    ext_modifiers_positions_values: {},
    choix_couleurs: {
      exterior_colors: [
        {
          "": [
            { exterior_color_unique_code: "" },
            { handles: [{ "": [{ handle_unique_code: "" }] }] },
          ],
        },
      ],
    },
  });

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://janneau-config-v2.herokuapp.com/api/v2/models/${unique_code}?user_email=marc.fauchreau@janneau.com&user_token=SY7L1Kn1X8-ZKv1VG8cx`
      )
      .then(({ data }) => {
        setDoor(data);
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
              {door.choix_couleurs.exterior_colors.map((item) => {
                return (
                  <div>
                    <button onClick={() => setShowHandleExt(!showHandleExt)}>
                      {item.exterior_color_unique_code}
                    </button>
                    {showHandleExt && <div>{item.handle_unique_code}</div>}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
