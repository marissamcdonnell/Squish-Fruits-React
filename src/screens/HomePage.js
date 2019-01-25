import React from "react";
import List from "../components/UI/List";
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
  state = {
    showList: false
  };

  handleList = () => {
    this.setState(() => ({ showList: true }));
  };

  render() {
    return (
      <div className="container">
        <div className="yellowbox homeP">
          {!this.state.showList ? (
            <div className="front-page-text">
              <h1>Welcome to Squish Fruit</h1>
              <h3>Squishing fruit is our thing!</h3>
              <p>
                Click below to see a list of all of the available fruit to
                squish!
              </p>
              <Link to="/list">
                <button
                  className="button"
                  onClick={this.handleList}
                  id="sideFruits"
                >
                  Fruits!
                </button>
              </Link>
            </div>
          ) : (
            <List />
          )}
        </div>
      </div>
    );
  }
}
