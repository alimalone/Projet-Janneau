import React, { useState } from "react";

export default function ColorExtGris(props) {
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