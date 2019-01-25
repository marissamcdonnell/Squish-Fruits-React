import React from "react";
import { withAppContext } from "../../utils/AppContext";

class FruitAddButton extends React.Component {
  constructor() {
    super();
    this.addFruitToBowl = this.addFruitToBowl.bind(this);
    this.fruitTaste = this.fruitTaste.bind(this);
  }

  addFruitToBowl() {
    const { appContext } = this.props;
    if (appContext.click >= 3) {
      appContext.setContextState({
        addFruit: true,
        redirect: false
      });
      this.fruitTaste();
    }
  }

  fruitTaste() {
    const { appContext } = this.props;
    const tasteArray = appContext.clickedFruits.map(url => {
      const { flavor } = appContext.fruits.find(fruit => fruit.url === url);
      return flavor;
    });
    let numA = Math.floor(Math.random() * 3);
    let numB = Math.floor(Math.random() * 3);

    appContext.setContextState({
      taste: tasteArray[numA][numB]
    });
  }

  render() {
    return (
      <button id="add-to-bowl" className="button" onClick={this.addFruitToBowl}>
        Add to Bowl
      </button>
    );
  }
}

export default withAppContext(FruitAddButton);
