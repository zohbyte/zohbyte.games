import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  useHistory
} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import Application from "./containers/application/Application";

// Component to handle GitHub Pages 404 redirect
function RedirectHandler() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    // Check if we have a query parameter route (from 404.html redirect)
    if (location.search && location.search.startsWith("?/")) {
      const searchParams = location.search.substring(2); // Remove '?/'
      const path = "/" + searchParams.split("&")[0].replace(/~and~/g, "&");
      const hash = location.hash;

      // Only redirect if we're not already on the correct path
      if (location.pathname !== path) {
        history.replace(path + hash);
      }
    }
  }, [location, history]);

  return null;
}

function App() {
  // For GitHub Pages, use the homepage from package.json
  const basename = process.env.PUBLIC_URL || "";

  return (
    <Router basename={basename}>
      <RedirectHandler />
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
