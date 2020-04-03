import React from "react";
import Header from "../../components/Header";

import IBGE from "../../components/Home/IBGE";

const Home = ({ list, selected, selectIBGE }) => {
  return (
    <div>
      <Header />

      <div>
        <h1>Seleção de cidades</h1>
        <p>Parametrize as cidades desejadas</p>
      </div>

      <IBGE />
    </div>
  );
};

export default Home;
