import React from "react";
import { connect } from "react-redux";

import "./style.css";

const SelectedIBGE = ({ list }) => (
  <div className="ContentSelectedCities">
    <h2>Cidades selecionadas</h2>

    {list.filter((item) => item.checked).length > 0 ? (
      <ul>
        {list
          .filter((item) => item.checked)
          .map((item) => (
            <li key={item.id}>{item.city}</li>
          ))}
      </ul>
    ) : (
      <span>Nada selecionado</span>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  list: state.IBGE.list,
});

export default connect(mapStateToProps)(SelectedIBGE);
