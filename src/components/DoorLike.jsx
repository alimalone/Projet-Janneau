import React from "react";


export default function DoorLike(item) {
return (
    <div className="pictureLike">
        <img src={`/photos/${item.name}.jpg`} alt=""/>
        <h3>{item.name}</h3>
        </div>
)
}