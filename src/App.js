import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import React from 'react'

function App() {
  //console.log(props.match.params.hatid)
  return (
    <div>
      <Switch>
        <Route exact path="/as" component={HomePage} />
        <Route path="/hats/:hatid" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
