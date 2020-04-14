import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style/Configurateur.scss";
import axios from "axios";

export default function Configurateur(props) {
  const { name} = useParams();
  
  const [door, setDoor] = useState({
      
          unique_code: "",
          name: "",
          
      
         ext_modifiers_positions_values: {color_modifier:""},
         int_modifiers_positions_values: {}
      

        });
  //const [panel, setPanel] = useState({ choix_panneaux: [] });
  useEffect(() => {
    
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://janneau-config-v2.herokuapp.com/api/v2/models/M01-N001?user_email=marc.fauchreau@janneau.com&user_token=SY7L1Kn1X8-ZKv1VG8cx`
      )
      .then(({ data }) => {
        setDoor(data);
        console.log(data)
       // setPanel(data);
      });
      
  }, []);

  return (
    <div className="configuratorBox">
       
       <img src={`/photos/${name}.jpg`} alt="" />
      <div className="colors">
          {door.ext_modifiers_positions_values.color_modifier
              }
           
      
       

      </div>
     
    </div>
  );
}
