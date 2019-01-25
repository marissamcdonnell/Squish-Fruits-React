import React from "react";
import { withAppContext } from "../../utils/AppContext";

class FruitResetButton extends React.Component {
  constructor() {
    super();
    this.resetFruits = this.resetFruits.bind(this);
  }

  resetFruits() {
    this.props.appContext.setContextState({
      addFruit: false,
      click: 0,
      clickedFruits: [],
      squishClick: 0
    });
  }

  render() {
    return (
      <button className="reset button" onClick={this.resetFruits}>
        RESET
      </button>
    );
  }
}

export default withAppContext(FruitResetButton);
