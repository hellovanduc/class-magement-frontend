import "./App.scss";
import React from "react";
import Header from "./components/shared/Header";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/home/Home";
import Class from "./components/class/Class";

function App() {
  return (
    <Router>
      <Header></Header>
      <br />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/class" component={Class} />
      </Switch>
    </Router>
  );
}

export default App;
