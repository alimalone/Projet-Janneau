import React, { useState } from "react";

export default function ColorExtBlanc(props) {
  const [changeExtInt, setChangeExtInt] = useState(true);
  const changeExt = () => setChangeExtInt(true);
  const changeInt = () => setChangeExtInt(false);
  return (
    <div>
      <div>
        

        <div>
          {changeExtInt ? (
            
          ) : (
            <div>
              <h2>Couleurs</h2>
              {props.colorInt.interior_colors.map((item) => {
                return <div>{item.interior_color_unique_code}</div>;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
