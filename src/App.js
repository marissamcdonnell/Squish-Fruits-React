import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import { AppContextProvider } from "./utils/AppContext";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const App = () => <AppContextProvider render={appContext => <AppRouter />} />;

ReactDOM.render(<App />, document.getElementById("app"));
