import React from "react";
import { connect } from "react-redux";
import * as IBGEActions from "../../../store/actions/IBGE";
import { bindActionCreators } from "redux";

import "./style.css";

const Home = ({ list, selectIBGE }) => {
  const handleSelectIBGE = (list, item) => {
    console.log(list);

    for (let i = 0; i < list.length; i++)
      if (list[i].codigo === item.codigo)
        list[i].selecionado = !list[i].selecionado;

    selectIBGE(list);
  };

  return (
    <div className="content-ibge">
      <ul>
        {list.map(item => (
          <li
            onClick={() => {
              handleSelectIBGE(list, item);
            }}
            className={item.selecionado ? "selected" : null}
            title="Clique para selecionar"
            key={item.codigo}
          >
            {item.codigo} - {item.cidade} - {item.selecionado ? "selecionado" : "desselecionado"}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  list: state.IBGE.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(IBGEActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
