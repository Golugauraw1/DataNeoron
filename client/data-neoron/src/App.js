import "./App.css"
import React from 'react';
import Navbar from "./Component/Navbar/Navbar";
import MainRoutes from "./AllRoutes/MainRoutes";

const App = () => {
  return (
    <div id="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
