import React from "react";
import { useParams } from "react-router-dom";

export default function Interieur() {
  const { unique_code } = useParams();

  return (
    <div className="configuratorBoxInt">
      <img src={`/photos/${unique_code}.jpg`} alt="" />
        <div className="custom">
            <div className="colorChoice">
            
            </div>
        </div>
      <h2>Couleurs</h2>
    </div>
  );
}
