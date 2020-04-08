import React, { useEffect, useState } from "react";
import "./style/Contemporaines.css";
import axios from "axios";
import Popup from "reactjs-popup";


const like = require('./icons/likeIcon.png');
  const dislike = require('./icons/likeIconHover.png');
  const doorlike = {like, dislike};



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
            return (
              <div key={i} className="imgName">
                <Popup
                  trigger={
                    <img
                      src={`/vectorielles/${item.name}.jpg`}
                      alt={item.name}
                    />
                  }
                  position="right center"
                >
                  <div className="doorLike">
                    <img src={`/photos/${item.name}.jpg`} alt={item.name} />
                    <p>{item.name}</p>
                   
                      
                  </div>
                </Popup>
              </div>
            );
          }
        )}
      </div>

      <h2>ALUMINIUM</h2>
      <div className="ALUMINIUM">
        {alu.ALU.filter((item) => item.cross_range === "Contemporaines").map(
          (item, i) => {
            return (
              <div key={i} className="imgName">
                <img src={`/vectorielles/${item.name}.jpg`} alt="/" />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}



export default Contemporaines;
