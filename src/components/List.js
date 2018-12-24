import React from "react";
import { Link } from "react-router-dom";
import { withAppContext } from "../utils/AppContext";
import PropTypes from "prop-types";

const List = ({ appContext }) => (
  <div className="container">
    <div className="side">
      <ul>
        {appContext.fruits.map(fruit => (
          <li key={fruit.id}>
            <img id={fruit.id} src={fruit.url} />
            {fruit.name}
          </li>
        ))}
      </ul>
    </div>
    <div className="yellowbox instructions">
      <div className="front-page-text">
        <h3>
          Now that you have seen our list of squishables, it is time to start
          the squishing process.
        </h3>
        <p>Please click the button below to begin.</p>
        <Link to="/fruits">
          <button className="button">Squishables</button>
        </Link>
      </div>
    </div>
  </div>
);

List.propTypes = {
  appContext: PropTypes.object.isRequired
};

export default withAppContext(List);
