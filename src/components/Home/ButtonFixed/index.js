import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { connect } from "react-redux";

import "./style.css";
import { useHistory } from "react-router-dom";

const ButtonFixed = ({ list }) => {
  const history = useHistory();

  const goDash = () => history.push("/dashboard");

  return (
    <button
      disabled={list.filter((x) => x.checked === true).length === 0}
      className="FixButton"
      onClick={goDash}
    >
      <FaArrowRight />
    </button>
  );
};

export default connect((state) => ({
  list: state.IBGE.list,
}))(ButtonFixed);
