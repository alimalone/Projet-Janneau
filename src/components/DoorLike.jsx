import React from "react";
import "./style/DoorLike.scss";
import ReactModal from "react-modal";


ReactModal.setAppElement(document.getElementById("root"));


export default function DoorLike(props) {
   




return (
    <div className="pictureLike">
        <ReactModal>
       <img src={`/vectorielles/${props.name}.jpg`} alt=""/>
        <h3>{props.name}</h3>
        </ReactModal>
        </div>
)
}