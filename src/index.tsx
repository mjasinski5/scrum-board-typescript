import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./App";
import LocalStorageDataProvider from "./localStorageDataProvider";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const localStorageDataProvider = new LocalStorageDataProvider();

const App = () => 
  <Router
    basename={process.env.PUBLIC_URL}
  >
      <Route path="/:team" render={(props) => <Dashboard {...props} dataProvider={localStorageDataProvider} />} />
  </Router>;


ReactDOM.render(
  <App />,
  document.getElementById("root")
);
