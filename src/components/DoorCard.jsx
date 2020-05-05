import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/DoorCard.scss";
import { connect } from 'react-redux';
import { addFavorite } from '../Reducer/ActionCreators';



  


  export default function DoorCard(props) {
  const vect = `/vectorielles/${props.item.unique_code}.jpg`;
  const photos = `/photos/${props.item.unique_code}.jpg`;
  const [img, setImg] = useState({selectedOption: vect});
  const imgSwitch = () => setImg((img) => !img);
  const [showBigger, setShowBigger] = useState(false);
  const [fav, setFav] = useState([]);
  const code = `${props.item.unique_code}`;
  const handleClick = () => {
    setFav(fav => [...fav, code])
    console.log(fav);
  }
  
  
return (
    <div className="imgName">
      {img ? (
        <div className="vect">
          <img
            src={vect}
            alt={props.item.name}
            id="imgSrc"
            onClick={()=> {
              imgSwitch();
              handleClick();
            }}
          />
        </div>
      ):(
        <div className="photo">
          <div className="imgButton">
            <img
              src={photos}
              alt={props.item.name}
              id="photos"
              onClick={imgSwitch}
            />
            <button
              className="bigger"
              onClick={() => {
                setShowBigger(true);
              }}
            ></button>
          </div>
          {showBigger && (
            <div className="biggerPhoto">
              <button
                className="close"
                onClick={() => {
                  setShowBigger(false);
                }}
              >
                X
              </button>
              <img src={photos} alt={props.item.name}   />
              
              {props.item.name}
              <Link to={`configurateur/${props.item.unique_code}`}>
                <button className="config">Personnaliser</button>
              </Link>
              
            </div>
          )}
        </div>
      )}
    </div>
  );
}
