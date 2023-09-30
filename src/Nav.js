import React from "react";
import { useHistory } from "react-router-dom";

const Nav = (props) => {
  const history = useHistory();
  return (
    <ul>
      <button onClick={() => history.push("/")}>Home</button>
      <div />
      <button onClick={() => history.push("/profile")}>Profile</button>
    </ul>
  );
};

export default Nav;
