import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return <Navbar />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
