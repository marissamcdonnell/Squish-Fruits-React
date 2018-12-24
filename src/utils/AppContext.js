/* eslint react/no-multi-comp: 0 */
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import anime from "anime";

const AppContext = React.createContext();

export class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    // fruitA is a value for default bowl image. These images aren't in the api
    this.state = {
      click: 0,
      fruits: [],
      url: "",
      clickedFruits: [],
      addFruit: false
    };
    this.getContext = this.getContext.bind(this);
    this.chooseFruit = this.chooseFruit.bind(this);
    this.addFruitToBowl = this.addFruitToBowl.bind(this);
    this.resetFruits = this.resetFruits.bind(this);
  }

  componentDidMount() {
    axios.get("https://api.myjson.com/bins/8t7qv").then(res => {
      this.setState({ fruits: res.data.data });
      console.log("made request");
    });
  }

  getContext() {
    return {
      ...this.state,
      chooseFruit: this.chooseFruit,
      addFruitToBowl: this.addFruitToBowl,
      resetFruits: this.resetFruits
    };
  }

  chooseFruit(id) {
    const { fruits } = this.state;
    const chosenFruitId = id;
    const { url } = fruits.find(fruit => fruit.id === chosenFruitId);

    this.setState(({ click, clickedFruits }) => ({
      click: click + 1,
      clickedFruits:
        click < 3 ? [...clickedFruits, url] : [...clickedFruits.slice(1), url]
    }));

    //first solution to rotate through adding fruits then clearing fruits on fourth click
    // clickedFruits: clickedFruits.length > 2 ? [] : [...clickedFruits, url]
  }

  addFruitToBowl() {
    this.setState({
      addFruit: true
    });
  }

  resetFruits() {
    this.setState({
      addFruit: false,
      click: 0,
      clickedFruits: []
    });
  }

  squishing() {}

  render() {
    const { render } = this.props;
    const context = this.getContext();
    return (
      <AppContext.Provider value={context}>
        {render(context)}
      </AppContext.Provider>
    );
  }
}

AppContextProvider.propTypes = {
  render: PropTypes.func.isRequired
};

export const withAppContext = Component => props => (
  <AppContext.Consumer>
    {appContext => <Component {...props} appContext={appContext} />}
  </AppContext.Consumer>
);
