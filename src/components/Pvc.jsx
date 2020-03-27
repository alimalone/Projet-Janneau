import React from "react";
import "./style/Pvc.scss";
import imgPorteVect from "../imgPorteVect";


const vectPvcCont = imgPorteVect;

export default function Pvc() {
  
  return (
    <div className="AllDoors">
      <h2>Contemporaines</h2>
      <div className="Contemporaines">
        
          { vectPvcCont.map(({src}) => <img src={src} alt={"/"} />
          )}
        
        
      </div>
      
      <div className="Intemporelles">
      <h2>Intemporelles</h2>
        <img src="https://via.placeholder.com/100x200" alt="porte" />
      </div>
      
      <div className="Lumineuses">
      <h2>Lumineuses</h2>
        <img src="https://via.placeholder.com/100x200" alt="porte" />
      </div>
    </div>
  );
}
