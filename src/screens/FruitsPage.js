import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withAppContext } from "../utils/AppContext";
import FruitListButton from "../components/FruitPage/FruitListButton";
import FruitAddButton from "../components/FruitPage/FruitAddButton";
import FruitResetButton from "../components/FruitPage/FruitResetButton";
import FruitBowls from "../components/UI/FruitBowls";

class FruitsPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { appContext } = this.props;
    return (
      <div className="mix mix-container">
        <div className="mixLeft">
          <h3>Now the real fun begins!</h3>
          {appContext.addFruit == false ? (
            <Fragment>
              <p> Pick three of the fruits from the list below.</p>
              <FruitAddButton />
            </Fragment>
          ) : (
            <Fragment>
              <p className="squish">Squish that fruit!</p>
              <div className="mix-squish-buttons">
                <button className="button">
                  <Link to="/squish">SQUISH</Link>
                </button>
                <FruitResetButton />
              </div>
            </Fragment>
          )}
          <div className="fruitL2" id="fruitsLB">
            <ul>
              {appContext.fruits &&
                appContext.fruits.map(fruit => (
                  <li key={fruit.id}>
                    <FruitListButton id={fruit.id} src={fruit.url} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <FruitBowls />
      </div>
    );
  }
}

export default withAppContext(FruitsPage);
