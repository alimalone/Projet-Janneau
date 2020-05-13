import React, { useState } from "react";

export default function ColorExtBlanc(props) {
  const [showCustom, setShowCustom] = useState(false);
  const [showExt, setShowExt] = useState(true);
  const [showInt, setShowInt] = useState(false);
  return (
    <div>
      <button onClick={() => setShowCustom(!showCustom)}>{props.color}</button>
      {showCustom && (
        <div>
          <button className="exterieur" onClick={() => setShowExt(!showExt)} />
          <button className="interieur" onClick={() => setShowInt(!showInt)} />
        </div>
      )}
      
      {showExt && (
        <div className="exterieur">
          {props.custom.handles.map((item) => {
            return <div>{item.handle_unique_code}</div>;
          })}
        </div>
      )}
      
      {showInt && (
        <div className="interieur">
          {props.custom.interior_colors.map((item) => {
            return <div>{item.interior_color_unique_code}</div>;
          })}
        </div>
      )}
    </div>
  );
}
