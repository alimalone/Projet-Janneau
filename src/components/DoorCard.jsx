import React, { useState } from "react";
//import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style/DoorCard.scss";

const white = require("../icons/likeIcon.png");
const red = require("../icons/likeIconHover.png");
const heart = { white, red };

function _toggleFavorite() {
  const action = { type: "TOGGLE_FAVORITE", value: this.state.film };
}

export default function DoorCard(props) {
  const vect = `/vectorielles/${props.item.unique_code}.jpg`;
  const photos = `/photos/${props.item.unique_code}.jpg`;
  const [selected, setSelected] = useState(heart.white);
  const [showPopup, setShowPopup] = useState(false);
  const [img, setImg] = useState(false);

  const imgShow = () => setImg(true);
  const imgNoShow = () => setImg(false);

  return (
    <div className="imgName">
      {img ? (
        <img
          src={vect}
          alt={props.item.name}
          id="imgSrc"
          onClick={() => setShowPopup(!showPopup)}
        />
      ) : (
        <img
          src={photos}
          alt={props.item.name}
          id="photos"
          onClick={imgNoShow}
        />
      )}

      <div id="pop">
        {showPopup && (
          <div className="doorLike">
            <div id="imgHeart">
              <img src={photos} alt="" id="imgPop" />
              <button onClick={imgShow}>
                <img
                  src={selected}
                  id="heart"
                  alt="like"
                  onClick={() => {
                    setSelected(
                      selected === heart.white ? heart.red : heart.white
                    );
                  }}
                />
              </button>
            </div>

            <p>{props.item.name}</p>

            <Link to={`configurateur/${props.item.unique_code}`}>
              <button>Personnaliser</button>
            </Link>
            <button className="close" onClick={() => setShowPopup(false)}>
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
