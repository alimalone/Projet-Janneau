import React from "react";
import { useParams } from "react-router-dom";
import "./style/Configurateur.scss";

function Configurateur() {
  const { name } = useParams();

  return (
      <div className="configuratorBox">
          <img
          src={`/photos/${name}.jpg`} alt =""/>
      </div>
  )
}

export default Configurateur;
