import React from "react";
import { connect } from "react-redux";
import * as IBGEActions from "../../../store/actions/IBGE";
import { bindActionCreators } from "redux";

import "./style.css";

const Home = ({ list, selectIBGE }) => {

  return (
    <div className="content-ibge">
      <ul>
        {list.map((item, index) => (
          <li
            onClick={() => {
              selectIBGE(index);
            }}
            className={item.checked ? "selected" : null}
            title="Clique para selecionar"
            key={item.id}
          >
            {index} - {item.city}
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
