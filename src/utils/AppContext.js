/* eslint react/no-multi-comp: 0 */
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Modal from "react-modal";

const AppContext = React.createContext();

export class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
      fruits: [],
      url: "",
      clickedFruits: [],
      addFruit: false,
      squishClick: 0,
      showModal: false,
      redirect: false,
      taste: ""
    };
    this.getContext = this.getContext.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setContextState = this.setContextState.bind(this);
  }

  componentDidMount() {
    axios.get("https://api.myjson.com/bins/8t7qv").then(res => {
      this.setState({ fruits: res.data.data });
      console.log("made request");
    });
  }

  componentWillMount() {
    Modal.setAppElement("body");
  }

  getContext() {
    return {
      ...this.state,
      closeModal: this.closeModal,
      setContextState: this.setContextState
    };
  }

  setContextState(state) {
    this.setState(state);
  }

  closeModal() {
    this.setState({ showModal: false, redirect: true });
    this.resetFruits();
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
