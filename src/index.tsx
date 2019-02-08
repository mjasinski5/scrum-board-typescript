import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./App";
import LocalStorageDataProvider from "./localStorageDataProvider";

const localStorageDataProvider = new LocalStorageDataProvider();
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => 
  <Router>
      <Route path="/:team" render={(props) => <Dashboard {...props} dataProvider={localStorageDataProvider} />} />
  </Router>;


ReactDOM.render(
  <App />,
  document.getElementById("root")
);
