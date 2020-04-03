import React from "react";

import "./style.css";

const Loading = ({ message }) => (
  <div className="ContentLoader">
    <div className="Loader">
      <span></span>
    </div>
    <h1>Aguarde</h1>
    <span>{message}</span>
  </div>
);

export default Loading;
