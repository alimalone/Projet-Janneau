import React from "react";
import DoorCard from "./DoorCard";
import NavBar from "../components/NavBar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./style/React-tabs.scss";
import { connect } from "react-redux";

function Contemporaines(props) {
  return (
    <Tabs>
      <NavBar />

      <TabList>
        <Tab>PVC</Tab>
        <Tab>ALUMINIUM</Tab>
      </TabList>
      <div className="list">
        <ul>
          <u>Favourites ({props.favourites.length})</u>
          <br />
          <br />
          {props.favourites.map((item, id) => (
            <li key={++id}>{item}</li>
          ))}
        </ul>
      </div>

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

const mapStateToProps = (state) => ({
  favourites: state.itemActions.favourites,
});

export default connect(mapStateToProps)(Contemporaines);
