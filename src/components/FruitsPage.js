import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withAppContext } from "../utils/AppContext";
import ChooseFruit from "./ChooseFruit";
import FruitBowls from "./FruitBowls";

const FruitsPage = ({ appContext }) => (
  <div className="mix">
    <div className="mix-container">
      <div className="mixLeft">
        <h3>Now the real fun begins!</h3>
        {appContext.addFruit == false ? (
          <Fragment>
            <p> Pick three of the fruits from the list below.</p>
            <button
              id="add-to-bowl"
              className="button"
              onClick={appContext.addFruitToBowl}
            >
              Add to Bowl
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <p className="squish">Squish that fruit!</p>
            <div className="mix-squish-buttons">
              <button className="button">
                <Link to="/squish">SQUISH</Link>
              </button>
              <button className="reset button" onClick={appContext.resetFruits}>
                RESET
              </button>
            </div>
          </Fragment>
        )}
        <div className="fruitL2">
          <div id="fruitsLB">
            <ul>
              {appContext.fruits &&
                appContext.fruits.map(fruit => (
                  <li key={fruit.id}>
                    <ChooseFruit
                      onClick={appContext.chooseFruit}
                      id={fruit.id}
                      src={fruit.url}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <FruitBowls />
    </div>
  </div>
);

export default withAppContext(FruitsPage);
