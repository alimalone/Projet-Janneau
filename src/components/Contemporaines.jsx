import React from "react";
import DoorCard from "./DoorCard";
import "./style/Contemporaines.scss";
import NavBar from "../components/NavBar";

function Contemporaines(props) {
  

  return (
    <div className="allDoors">
      <NavBar/>
      <h2>PVC</h2>
      <div className="PVC">
        {props.pvc.PVC.filter((item) => item.cross_range === "Contemporaines").map(
          (item, i) => {
            return <DoorCard item={item} key={i} />;
          }
        )}
      </div>

      <h2>ALUMINIUM</h2>
      <div className="ALUMINIUM">
        {props.alu.ALU.filter((item) => item.cross_range === "Contemporaines").map(
          (item, i) => {
            return <DoorCard item={item} key={i} />;
          }
        )}
      </div>
    </div>
  );
}

export default Contemporaines;
