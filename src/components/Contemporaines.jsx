import React, { useEffect, useState } from "react";
import "./style/Contemporaines.scss";
import axios from "axios";


export default function Contemporaines() {
  const [pvc, setPvc] = useState({ PVC: [] });
  const [alu, setAlu] = useState({ ALU: [] });

  useEffect(() => {
    axios
      .get(
        "https://janneau-config-v2.herokuapp.com//api/v1/models?user_email=marc.fauchreau@janneau.com&user_token=SY7L1Kn1X8-ZKv1VG8cx"
      )
      .then(({ data }) => {
        setPvc(data)
        setAlu(data);
      });
  }, []);

  return (
    <div classname="allDoors">
      
      <h2>PVC</h2>
      <div className="PVC">
        {pvc.PVC.filter((item) => item.cross_range === "Contemporaines").map(
          (item) => (
            <p>{item.name}</p>
          )
        )}
      </div>
      <h2>ALUMINIUM</h2>
      <div className="ALUMINIUM">
        {alu.ALU.filter((item) => item.cross_range === "Contemporaines").map(
          (item) => (
            <ul>{item.name}</ul>
          )
        )}
      </div>
    </div>
  );
}

//import imgPorteVect from "../imgPorteVect";

//const vectPvcCont = imgPorteVect;
//{ vectPvcCont.map(({src}) => <img src={src} alt={"/"} />
//         )}
