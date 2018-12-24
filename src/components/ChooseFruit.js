import React, { Fragment } from "react";
import { withAppContext } from "../utils/AppContext";
import PropTypes from "prop-types";

const ChooseFruit = ({ onClick, id, src }) => (
  <Fragment>
    <button className="fruit-button" onClick={() => onClick(id)} type="button" >
      <img id={id} src={src} />
    </button>
  </Fragment>
);

ChooseFruit.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired
};

export default withAppContext(ChooseFruit);
