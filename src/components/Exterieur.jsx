import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./style/Exterieur.scss";

export default function Exterieur(props) {
  const { unique_code } = useParams();
  
  let customDivs = ["customBlanc", "customGris", "customChene"];
  let visibleDivId = null;
  function toggleVisibility(divId) {
    if (visibleDivId === divId) {
      visibleDivId = true;
    } else {
      visibleDivId = divId;
    }
    hideNonVisibleDivs();
  }
  function hideNonVisibleDivs() {
    let i, divId, div;
    for (i = 0; i < customDivs.length; i++) {
      divId = customDivs[i];
      div = document.getElementById(divId);
      if (visibleDivId === divId) {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    }
  }
  return (
    <div className="configuratorBoxExt">
      <img src={`/photos/${unique_code}.jpg`} alt="" />

      <div className="custom">
        <div className="colorChoice">
          <button onClick={() => toggleVisibility("customBlanc")}>
            {props.blanc}
          </button>
          <button onClick={() => toggleVisibility("customGris")}>
            {props.gris}
          </button>
          <button onClick={() => toggleVisibility("customChene")}>
            {props.chene}
          </button>

          <div id="customBlanc">
            <h2>Poignées</h2>
            {props.handlesExt0.map((blanc) => {
              return <div>{blanc.handle_unique_code}</div>;
            })}
          </div>

          <div id="customGris">
            <h2>Poignées</h2>
            {props.handlesExt1.map((gris) => {
              return <div>{gris.handle_unique_code}</div>;
            })}
          </div>

          <div id="customChene">
            <h2>Poignées</h2>
            {props.handlesExt2.map((chene) => {
              return <div>{chene.handle_unique_code}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
