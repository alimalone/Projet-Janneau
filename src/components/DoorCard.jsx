import Popup from "reactjs-popup";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/DoorCard.scss";


const white = require("../icons/likeIcon.png");
const red = require("../icons/likeIconHover.png");
const heart = { white, red };

export default function DoorCard(props) {
  const vect = `/vectorielles/${props.item.unique_code}.jpg`;
  const photos = `/photos/${props.item.unique_code}.jpg`;
  const [selected, setSelected] = useState(heart.white);
  

  return (
    <div className="imgName">
      <Popup
        trigger={<img src={vect} alt={props.item.name} id="imgSrc" />}
        position="right center"
      >
        <div className="doorLike">
          <img src={photos} alt="" id="imgPop" />
          <img
            src={selected}
            alt=""
            onClick={() => {
              setSelected(selected === heart.white ? heart.red : heart.white);
            }}
          />

          <p>{props.item.name}</p>
          
          <Link to={`configurateur/${props.item.unique_code}`}>
            <button>Personnaliser</button>
          </Link>
        </div>
      </Popup>
    </div>
  );
}
