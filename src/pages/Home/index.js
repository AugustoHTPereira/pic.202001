import React from "react";

import Header from "../../components/Header";
import IBGE from "../../components/Home/IBGE";
import SelectedIBGE from "../../components/Home/SelectedIBGE";
import ButtonFixed from "../../components/Home/ButtonFixed";

import "./style.css";

const Home = ({ list, selected, selectIBGE }) => {
  return (
    <div className="content-home">
      <Header />

      <div className="PageTitle">
        <h1>Seleção de cidades</h1>
        <p>Parametrize as cidades desejadas</p>
        <span>
          Atenção! A quantidade de cidades selecionadas influencia diretamente
          no tempo de processamento.
        </span>
      </div>

      <div className="SelectedIBGE">
        <SelectedIBGE />
      </div>

      <IBGE />

      <ButtonFixed />
    </div>
  );
};

export default Home;
