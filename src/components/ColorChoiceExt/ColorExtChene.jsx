import React, { useState } from "react";

export default function ColorExtChene(props) {
  const [showHandleExt, setShowHandleExt] = useState(false);
  return (
    <div>
      <button onClick={() => setShowHandleExt(!showHandleExt)}>
        {props.color}
      </button>
      {showHandleExt && (
        <div>
          {props.handlesExt.handles.map((item) => {
            return <div>{item.handle_unique_code}</div>;
          })}
        </div>
      )}
    </div>
  );
}