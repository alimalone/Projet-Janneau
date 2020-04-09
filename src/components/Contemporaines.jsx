import React, { useEffect, useState } from "react";
import DoorCard from "./DoorCard";
import "./style/Contemporaines.scss";
import axios from "axios";

function Contemporaines() {
  const [pvc, setPvc] = useState({ PVC: [] });
  const [alu, setAlu] = useState({ ALU: [] });

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://janneau-config-v2.herokuapp.com//api/v1/models?user_email=marc.fauchreau@janneau.com&user_token=SY7L1Kn1X8-ZKv1VG8cx"
      )
      .then(({ data }) => {
        setPvc(data);
        setAlu(data);
      });
  }, []);

  return (
    <div className="allDoors">
      <h2>PVC</h2>
      <div className="PVC">
        {pvc.PVC.filter((item) => item.cross_range === "Contemporaines").map(
          (item, i) => {
            return <DoorCard item={item} key={i} />;
          }
        )}
      </div>

      <h2>ALUMINIUM</h2>
      <div className="ALUMINIUM">
        {alu.ALU.filter((item) => item.cross_range === "Contemporaines").map(
          (item, i) => {
            return <DoorCard item={item} key={i} />;
          }
        )}
      </div>
    </div>
  );
}

export default Contemporaines;
