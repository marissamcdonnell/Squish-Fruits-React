/* eslint react/no-multi-comp: 0 */
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

const AppContext = React.createContext();

export class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      fruits: [],
      url: ""
    };
    this.getContext = this.getContext.bind(this);
    this.chooseFruit = this.chooseFruit.bind(this);
  }

  componentDidMount() {
    axios.get("https://api.myjson.com/bins/8t7qv").then(res => {
      this.setState({ fruits: res.data.data });
    });
  }

  getContext() {
    return {
      ...this.state,
      chooseFruit: this.chooseFruit
    };
  }

  chooseFruit(e) {
    const { click, fruits } = this.state;

    this.setState(prevState => ({ click: prevState.click + 1 }));
    const imageID = e.currentTarget.id;

    const url = fruits.map(image => {
      if (image.id == imageID) image.url;
    });

    const urlB = url.filter(item => {
      if (item !== undefined) {
        return item;
      }
    })[0];

    if (click === 0) this.setState({ url: urlB });

    // console.log(this.state.url)

    if (this.state.click === 2) this.setState(() => ({ click: 0, url: urlB }));
    // console.log(this.state.url)
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
