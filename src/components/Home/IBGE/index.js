import React from "react";
import { connect } from "react-redux";
import * as IBGEActions from "../../../store/actions/IBGE";
import { bindActionCreators } from "redux";

import "./style.css";

const Home = ({ list, selected, selectIBGE }) => {
  return (
    <div className="content-ibge">
      <h1>{selected}</h1>

      <ul>
        {list.map(item => (
          <li
            onClick={() => selectIBGE([...selected, item])}
            title="Clique para selecionar"
            key={item.codigo}
          >
            {item.cidade}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  list: state.IBGE.state.list,
  selected: state.IBGE.state.selected
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(IBGEActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
