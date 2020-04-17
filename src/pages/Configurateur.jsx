import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style/Configurateur.scss";
import axios from "axios";

export default function Configurateur() {
  const { name } = useParams();
  const [ids, setIds] = useState({} );
  const [id, setId] = useState();

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://janneau-config-v2.herokuapp.com//api/v1/models?user_email=marc.fauchreau@janneau.com&user_token=SY7L1Kn1X8-ZKv1VG8cx"
      )
      .then(({ data }) => {
        setIds(data);
      })
      .then(() => {
        Array.from(ids)
          .filter((id)=>{
            if (id.name === `${name}`)
           {
            return axios
              .get(
                `https://cors-anywhere.herokuapp.com/https://janneau-config-v2.herokuapp.com/api/v2/models/${id.unique_code}?user_email=marc.fauchreau@janneau.com&user_token=SY7L1Kn1X8-ZKv1VG8cx`
              )
              .then(({ data }) => {

                setId(data);
                
              });
          };
      }, []);
  },[]);
});



  return (
    <div className="configuratorBox">
      <img src={`/photos/${name}.jpg`} alt="" />
      <div>{id}</div>
    </div>
  );
}
