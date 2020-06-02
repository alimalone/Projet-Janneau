import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/DoorCard.scss";
import { connect } from "react-redux";
import { doorFavourite, removeFavourite } from "../actions";
const bigger = require("../icons/bigger.png");
const white = require("../icons/likeIcon.png");


function DoorCard(props) {
  const vect = `/vectorielles/${props.item.unique_code}.jpg`;
  const photos = `/photos/${props.item.unique_code}.jpg`;

  const [img, setImg] = useState(vect);
  const imgSwitch = () => setImg((img) => !img);

  const [showBigger, setShowBigger] = useState(false);

  const code = `${props.item.unique_code}`;
  const name = `${props.item.name}`;

  const updateFavourites = (code) => {
    return props.favourites.find((item) => item === code)
      ? props.removeFavourite(code)
      : props.doorFavourite(code);
  };

  return (
    <div className="imgName">
      {img ? (
        <div className="vect">
          <img
            src={vect}
            alt={name}
            id="imgSrc"
            onClick={() => {
              imgSwitch();
            
            }}
          />
        </div>
      ) : (
        <div className="photo">
          <div className="imgButton">
            <img
              src={photos}
              alt={name}
              id="photos"
              onClick={() => {
                imgSwitch();
              }}
            />

            <img
              src={bigger}
              alt="bigger"
              className="bigger"
              onClick={() => {
                setShowBigger(true);
              }}
            />
            <img
              src={white}
              onClick={() => updateFavourites(code)}
              alt="heart"
              className="heart"
            />
          </div>
          {showBigger && (
            <div className="biggerPhoto">
              <button
                className="close"
                onClick={() => {
                  setShowBigger(false);
                }}
              >
                x
              </button>
              <img src={photos} alt={name} />
              <p>{name}</p>

              <Link to={`homeConfig/${code}`}>
                <button className="config">Personnaliser</button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  favourites: state.itemActions.favourites,
});

export default connect(mapStateToProps, { doorFavourite, removeFavourite })(
  DoorCard
);
