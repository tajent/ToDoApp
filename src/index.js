import React from "react";
import ReactDOM from "react-dom";
import DashboardContainer from "./DashboardContainer";
import "./styles.css";

function App() {
  return <DashboardContainer />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
