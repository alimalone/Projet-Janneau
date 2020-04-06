import React, { useEffect, useState } from "react";
import "./style/Intemporelles.scss";
import axios from "axios";

export default function Intemporelles() {
  const [pvc, setPvc] = useState({ PVC: [] });
  const [alu, setAlu] = useState({ ALU: [] });
  const [bois, setBois] = useState({ BOIS: [] });

  useEffect(() => {
    axios
      .get(
        "https://janneau-config-v2.herokuapp.com//api/v1/models?user_email=marc.fauchreau@janneau.com&user_token=SY7L1Kn1X8-ZKv1VG8cx"
      )
      .then(({ data }) => {
        setPvc(data);
        setAlu(data);
        setBois(data);
      });
  }, []);

  return (
    <div className="allDoors">
      <h2>PVC</h2>
      <div className="PVC">
        {pvc.PVC.filter(
          (item) => item.cross_range === "Lumineuses"
        ).map((item) => (
          <p>{item.name}</p>
        ))}
      </div>
      <h2>ALUMINIUM</h2>
      <div className="ALUMINIUM">
        {alu.ALU.filter(
          (item) => item.cross_range === "Lumineuses"
        ).map((item) => (
          <p>{item.name}</p>
        ))}
      </div>
      <h2>BOIS</h2>
      <div className="BOIS">
        {bois.BOIS.filter(
          (item) => item.cross_range === "Lumineuses"
        ).map((item) => (
          <p>{item.name}</p>
        ))}
      </div>
    </div>
  );
}