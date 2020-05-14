import React, {useState} from "react";
import {useParams} from "react-router-dom";
//import "./style/Configurateur.scss";




export default function Exterieur(props) {
  const { unique_code } = useParams();
  const [showCustomBlanc, setShowCustomBlanc] = useState(false);
  const [showCustomGris, setShowCustomGris] = useState(false);
  const [showCustomChene, setShowCustomChene] = useState(false);

  return (
    
    <div className="configuratorBoxExt">
      <img src= {`/photos/${unique_code}.jpg`} alt=""/>
      
      
     
        <div className="custom">
          <div className="colorChoice">
            <button onClick={() => setShowCustomBlanc(!showCustomBlanc)}>
              {props.blanc}
            </button>
            <button onClick={() => setShowCustomGris(!showCustomGris)}>
              {props.gris}
            </button>
            <button onClick={() => setShowCustomChene(!showCustomChene)}>
              {props.chene}
            </button>

            {showCustomBlanc && (
              <div>
              <h2>Poignées</h2>
              {props.handlesExt0.map((item) => {
                return <div>{item.handle_unique_code}</div>;
              })}
            </div>
            )}

            {showCustomGris && (
              <div>
              <h2>Poignées</h2>
              {props.handlesExt1.map((item) => {
                return <div>{item.handle_unique_code}</div>;
              })}
            </div>
            )}

            {showCustomChene && (
              <div>
              <h2>Poignées</h2>
              {props.handlesExt2.map((item) => {
                return <div>{item.handle_unique_code}</div>;
              })}
            </div>
            )}
          </div>
        </div>
      
    </div>
  );
}
