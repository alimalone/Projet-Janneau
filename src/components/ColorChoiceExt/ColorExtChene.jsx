import React, { useState } from "react";

export default function ColorExtBlanc(props) {
  const [changeExtInt, setChangeExtInt] = useState(true);
  const changeExt = () => setChangeExtInt(true);
  const changeInt = () => setChangeExtInt(false);
  return (
    <div>
      <div>
        <div>
          <button className="exterieur" onClick={changeExt}>
            Exterieur
          </button>
          <button className="interieur" onClick={changeInt}>
            Interieur
          </button>
        </div>

        <div>
          {changeExtInt ? (
            <div>
              <h2>Poignées</h2>
              {props.handlesExt.map((item) => {
                return <div>{item.handle_unique_code}</div>;
              })}
            </div>
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
