import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import Demo from "./components/Demo";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient"></div>
      </div>

      <div className="app">
        <HeaderComponent />
        <Demo />
      </div>
    </main>
  );
};

export default App;
