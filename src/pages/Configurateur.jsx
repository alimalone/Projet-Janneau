import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style/Configurateur.scss";
import axios from "axios";

export default function Configurateur() {
  const { name } = useParams();
  //const [ids, setIds]=useState();
  const [founds, setFounds]=useState({PVC: []});
 
    const filterId = ()=> {
        founds.PVC.filter((item)=> item.name === `${name}`)
        .filter((item) => item.unique.code) 
    
}





    //const [door, setDoor] = useState({
  // unique_code: "",
  // name: "",
  
  // ext_modifiers_positions_values: { color_modifier: "" },
  // int_modifiers_positions_values: {},
  // });
  //const [panel, setPanel] = useState({ choix_panneaux: [] });
  useEffect(() => {
    
    
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://janneau-config-v2.herokuapp.com//api/v1/models?user_email=marc.fauchreau@janneau.com&user_token=SY7L1Kn1X8-ZKv1VG8cx`
      )
      .then(({ data }) => {
        setFounds(data);
    });
}, []);
     /* useEffect (()=> {
          axios
        .get(`https://cors-anywhere.herokuapp.com/https://janneau-config-v2.herokuapp.com/api/v2/models/${filterId}?user_email=marc.fauchreau@janneau.com&user_token=SY7L1Kn1X8-ZKv1VG8cx` 
        )
   .then(({data}) =>{
    
    console.log(data);
   }) ;

      });*/
   
                

            
        
    

  return (
    <div className="configuratorBox">
      <img src={`/photos/${name}.jpg`} alt="" />
      
    </div>
  );
}

/*<div className="colors">{founds.PVC.filter((item)=> item.name === `${name}`).map(
          (item, i) => {
              return <div key={i}>{item.unique_code}</div>
          })}
</div>
*/