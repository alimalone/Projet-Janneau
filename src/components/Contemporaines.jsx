import React from "react";
import DoorCard from "./DoorCard";
import NavBar from "../components/NavBar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./style/React-tabs.scss";





function Contemporaines(props) {
  return (
    <Tabs>
      <NavBar />

      <TabList>
        <Tab>PVC</Tab>
        <Tab>ALUMINIUM</Tab>
      </TabList>

      <TabPanel>
        {props.pvc.PVC.filter(
          (item) => item.cross_range === "Contemporaines"
        ).map((item, i) => {
          return <DoorCard item={item} key={i} />;
        })}
      </TabPanel>
      <TabPanel>
        {props.alu.ALU.filter(
          (item) => item.cross_range === "Contemporaines"
        ).map((item, i) => {
          return <DoorCard item={item} key={i} />;
        })}
      </TabPanel>
    </Tabs>
  );
}

export default Contemporaines;
