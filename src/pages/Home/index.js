import React from "react";
import { connect } from "react-redux";
import * as IBGEActions from "../../store/actions/IBGE";
import { bindActionCreators } from "redux";
import Header from "../../components/Header";

const Home = ({ list, selected, selectIBGE }) => {
  return (
    <div>
      <Header />

      <h1>Home</h1>

      {JSON.stringify(selected)}
      {JSON.stringify(list)}
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
