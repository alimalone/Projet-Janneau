import React from "react";







export default function HandleChoiceExt(props) {
  
    return (
        <div>
            
                
               
                      {props.item.handles.map((item) => {
                        return <div>{item.handle_unique_code}</div>;
                      })}
                        </div>
                     
                   





    );
}