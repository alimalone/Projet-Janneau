import React from "react";
import { Link} from "react-router-dom";




export default function SelectedDoor(props) {
  
  const photos = `/photos/${props.item.unique_code}.jpg`;
  

  

  return (
      
      
    <Link to={`configurateur/${props.item.unique_code}`}>
      <img src={photos} alt={props.item.name} id="photos" />
    </Link>
    
  );
}
