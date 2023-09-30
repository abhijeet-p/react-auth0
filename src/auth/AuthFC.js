import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import auth0 from "auth0-js";
const Auth = (/*{ history }*/) => {
  // we passing react-routers history in so auth can perform redirects
  // this will allow us programmaticly interact with react-router
  // since we will have reference to a history object within our auth
  const history = useHistory();
  const [auth0Instance] = useState(
    new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      // token : give us an access token so user can make api calls
      // id_token : give us a JWT to authenticate user when they login
      // so we are requesting both types of tokens
      response_type: "token id_token",
      // scope is where we specify permissions
      // we to use openid for authentication: the JWT we will get back will have standard openid claim
      scope: "openid profile email",
      // when user signs up, theyll presented with a consent screen so they can consent
      // to us using this data (above scopes)
    })
  );

  const login = () => {
    auth0Instance.authorize(); // this will redirect the browser to the auth0 login page
  };
};
export default Auth;
