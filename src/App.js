import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Home from './components/Home';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

class App extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <Home />
        </div>
      );
    }
}


ReactDOM.render(<App />, document.getElementById("app"));
