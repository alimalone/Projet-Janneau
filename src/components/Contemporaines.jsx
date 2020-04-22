import React from "react";
import DoorCard from "./DoorCard";
import "./style/Contemporaines.scss";
import NavBar from "../components/NavBar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './style/React-tabs.scss';

function Contemporaines(props) {
  return (
    <div className="allDoors">
      
    <Tabs>
      <NavBar />
      
      <TabList>
        <Tab>PVC</Tab>
        <Tab>ALUMINIUM</Tab>
      </TabList>
     
      
        <TabPanel>
          
          <div className="PVC">
            {props.pvc.PVC.filter(
              (item) => item.cross_range === "Contemporaines"
            ).map((item, i) => {
              return <DoorCard item={item} key={i} />;
            })}
          </div>
        </TabPanel>
        <TabPanel>
        
          <div className="ALUMINIUM">
            {props.alu.ALU.filter(
              (item) => item.cross_range === "Contemporaines"
            ).map((item, i) => {
              return <DoorCard item={item} key={i} />;
            })}
          </div>
        </TabPanel>
      
    </Tabs>
    </div>
  );
}

export default Contemporaines;
