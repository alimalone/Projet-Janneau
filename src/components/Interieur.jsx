import React from"react";
import {useParams} from "react-router-dom";





export default function Interieur() {
    const { unique_code } = useParams();
    return (
<div>
<img src= {`/photos/${unique_code}.jpg`} alt=""/>
              <h2>Couleurs</h2>
              
            </div>
    );
}

