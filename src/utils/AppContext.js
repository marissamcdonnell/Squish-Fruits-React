/* eslint react/no-multi-comp: 0 */
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import anime from "animejs";

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
      addFruit: false,
      squishClick: 0
    };
    this.getContext = this.getContext.bind(this);
    this.chooseFruit = this.chooseFruit.bind(this);
    this.addFruitToBowl = this.addFruitToBowl.bind(this);
    this.resetFruits = this.resetFruits.bind(this);
    this.squishing = this.squishing.bind(this);
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
      resetFruits: this.resetFruits,
      squishing: this.squishing
    };
  }

  chooseFruit(id) {
    const { fruits } = this.state;
    const chosenFruitId = id;
    const { url } = fruits.find(fruit => fruit.id === chosenFruitId);
    if (this.state.addFruit == false) {
      this.setState(({ click, clickedFruits }) => ({
        click: click + 1,
        clickedFruits:
          click < 3 ? [...clickedFruits, url] : [...clickedFruits.slice(1), url]
      }));
    } else {
      document.getElementsByClassName("fruit-button").disable = true;
    }

    //first solution to rotate through adding fruits then clearing fruits on fourth click
    // clickedFruits: clickedFruits.length > 2 ? [] : [...clickedFruits, url]
  }

  addFruitToBowl() {
    if (this.state.click >= 3) {
      this.setState({
        addFruit: true
      });
    } else {
      document.getElementById("add-to-bowl").disable = true;
    }
  }

  resetFruits() {
    this.setState({
      addFruit: false,
      click: 0,
      clickedFruits: []
    });
  }

  squishing() {
    anime({
      targets: ".pestle",
      translateY: [
        { value: 200, duration: 400},
        { value: 0, duration: 500, easing: "easeOutExpo" },

        { value: 200, duration: 400 },
        { value: 0, duration: 600, easing: "easeOutExpo" },

        { value: 200, duration: 400 },
        { value: 0, duration: 600, easing: "easeOutExpo" }
      ],
      translateX: [
        { value: -20, duration: 400},
        { value: 60, duration: 500, easing: "easeOutExpo" },

        { value: 0, duration: 400 },
        { value: -60, duration: 600, easing: "easeOutExpo" },

        { value: 20, duration: 400 },
        { value: 0, duration: 600, easing: "easeOutExpo" }
      ],
      rotate: [
        { value: 25, duration: 400, delay: 400, easing: "easeOutSine" },

        { value: -10, duration: 400, delay: 400, easing: "easeOutSine" },

        { value: 16, duration: 400, delay: 400, easing: "easeOutSine" }
      ]
    });
    switch (this.state.squishClick) {
      case 0:
        anime({
          delay: 300,
          targets: ".squishFruit",
          opacity: 1,
          easing: "easeInOutQuad",
          translateY: {value: -18, easing: "linear"},
          duration: 1000
        })
        break
      case 1:
        let case1 = anime.timeline()
        case1
          .add({
            targets: ".squishFruit",
            opacity: 0,
            easing: "easeInOutQuad",
            translateY: {value: 15, easing: "linear"},
            duration: 1000
          })
          .add({
            offset: 0,
            targets: ".squishFruit2",
            opacity: 1,
            easing: "easeInOutQuad",
            translateY: {value: -18, easing: "linear"},
            duration: 1000
          })
          break
        case 2:
          let case2 = anime.timeline()
          case2
            .add({
              targets: ".squishFruit2",
              opacity: 0,
              easing: "easeInOutQuad",
              translateY: {value: 15, easing: "linear"},
              duration: 1000
            })
            .add({
              offset: 0,
              targets: ".squishFruit3",
              opacity: 1,
              easing: "easeInOutQuad",
              translateY: {value: -18, easing: "linear"},
              duration: 1000
            })
            break
      default:
      console.log('default')
        
        break
  }
  


    this.setState({squishClick: this.state.squishClick + 1})
    console.log("squish click", this.state.squishClick)
  }

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
