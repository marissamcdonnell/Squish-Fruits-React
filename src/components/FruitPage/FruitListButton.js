import React, { Fragment } from "react"
import { withAppContext } from "../../utils/AppContext"
import PropTypes from "prop-types"

class FruitListButton extends React.Component {
  constructor() {
    super()
    this.chooseFruit = this.chooseFruit.bind(this)
  }
  
  chooseFruit(id) {
    const { appContext } = this.props;
    const chosenFruitId = id;
    const { url } = appContext.fruits.find(fruit => fruit.id === chosenFruitId);
    if (appContext.addFruit == false) {
      appContext.setContextState(({ click, clickedFruits }) => ({
        click: click + 1,
        clickedFruits:
          click < 3 ? [...clickedFruits, url] : [...clickedFruits.slice(1), url]
      }))
    }
  }
    //first solution to rotate through adding fruits then clearing fruits on fourth click
    // clickedFruits: clickedFruits.length > 2 ? [] : [...clickedFruits, url]

  render() {
    const { id, src } = this.props
    return (
    <Fragment>
      <button className="fruit-button" onClick={() => this.chooseFruit(id)} type="button" >
        <img id={id} src={src} />
      </button>
    </Fragment>
    )
  }
}

FruitListButton.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired
};

export default withAppContext(FruitListButton);
