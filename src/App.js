import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";
import Nav from "./Nav";
import Auth from "./auth/Auth";
import { useHistory } from "react-router-dom";
import Callback from "./Callback";

function App() {
  const history = useHistory();
  const handleAuthRedirect = (path) => {
    history.push(path);
  };
  const auth = new Auth(history, handleAuthRedirect);

  // Perform any necessary initialization or side effects with auth
  useEffect(() => {
    // For example, we might want to initialize authentication here
    // auth.init();
  }, [auth]);

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/Profile" component={Profile} />
          <Route
            path="/callback"
            render={(props) => <Callback auth={auth} {...props} />}
          />
          <Route path="/" render={(props) => <Home auth={auth} {...props} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
