import React from "react";
import DoorCard from "./DoorCard";
import "./style/Lumineuses.scss";
import NavBar from "../components/NavBar";

export default function Intemporelles(props) {
  return (
    <div className="allDoors">
      <NavBar />
      <h2>PVC</h2>
      <div className="PVC">
        {props.pvc.PVC.filter((item) => item.cross_range === "Lumineuses").map(
          (item, i) => {
            return <DoorCard item={item} key={i} />;
          }
        )}
      </div>
      <h2>ALUMINIUM</h2>
      <div className="ALUMINIUM">
        {props.alu.ALU.filter((item) => item.cross_range === "Lumineuses").map(
          (item, i) => {
            return <DoorCard item={item} key={i} />;
          }
        )}
      </div>
      <h2>BOIS</h2>
      <div className="BOIS">
        {props.bois.BOIS.filter(
          (item) => item.cross_range === "Lumineuses"
        ).map((item, i) => {
          return <DoorCard item={item} key={i} />;
        })}
      </div>
    </div>
  );
}
