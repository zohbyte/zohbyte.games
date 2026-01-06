import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import Application from "./containers/application/Application";

function App() {
  // For GitHub Pages, use the homepage from package.json
  const basename = process.env.PUBLIC_URL || "";
  
  return (
    <Router basename={basename}>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/apply" component={Application} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
