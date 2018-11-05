/* eslint react/no-multi-comp: 0 */
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

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
    };
    this.getContext = this.getContext.bind(this);
    this.chooseFruit = this.chooseFruit.bind(this);
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
      chooseFruit: this.chooseFruit
    };
  }

  chooseFruit(id) {
    const { fruits } = this.state;
    const chosenFruitId = id;
    const { url } = fruits.find(fruit => fruit.id === chosenFruitId);

    this.setState( ({ clickedFruits }) => ({
      clickedFruits: clickedFruits.length > 2 ? [] : [...clickedFruits, url]
      }))

      //rotate array of fruits.

    // if (click === 0) {
    //   this.setState(prevState => {
    //     return {
    //       click: prevState.click + 1,
    //       fruitA: fruitAUrl.url,
    //     };
    //   });
    // }

    // if (click === 1) {
    //   this.setState(prevState => {
    //     return {
    //       click: prevState.click + 1,
    //       fruitB: fruitAUrl.url
    //     };
    //   });
    // }
    // if (click === 2) {
    //   this.setState(() => {
    //     return {
    //       click: 0,
    //       fruitC: fruitAUrl.url
    //     };
    //   });
    // }
    //
    // const urlB = url.filter(item => {
    //   if (item !== undefined) {
    //     return item;
    //   }
    // })[0];
    //
    // if (click === 0) this.setState({ url: urlB });
    //
    // // console.log(this.state.url)
    //
    // if (this.state.click === 2) this.setState(() => ({ click: 0, url: urlB }));
    // // console.log(this.state.url)
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
