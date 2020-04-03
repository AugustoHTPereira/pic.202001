import React from "react";

import "./style.css";

const FoundedData = ({ list }) => {
  console.log("Montando dados", list);

  return (
    <div className="ContentFoundedData">
      <ul>
        {list.map((x, index) => (
          <li key={index}>
            <span>{x.id}</span>
            <span>{x.municipio.codigoIBGE}</span>
            <span>{x.municipio.nomeIBGE}</span>
            <span>{x.valor}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoundedData;
