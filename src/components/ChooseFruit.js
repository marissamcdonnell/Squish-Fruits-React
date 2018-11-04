import React, { Fragment } from "react";
import { withAppContext } from "../utils/AppContext";
import PropTypes from "prop-types";

const ChooseFruit = ({ onClick, id, src }) => (
  <Fragment>
    <img id={id} src={src} onClick={e => onClick(id, e)} />
  </Fragment>
);

ChooseFruit.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired
};

export default withAppContext(ChooseFruit);
