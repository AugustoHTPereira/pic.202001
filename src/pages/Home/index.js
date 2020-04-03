import React from "react";
import Header from "../../components/Header";

import IBGE from "../../components/Home/IBGE";

const Home = ({ list, selected, selectIBGE }) => {
  return (
    <div>

      <Header />

      <h1>Código IBGE - Minas Gerais</h1>
      <h3>Selecione as cidades a serem analizadas</h3>

      <IBGE />
    </div>
  );
};

export default Home;
