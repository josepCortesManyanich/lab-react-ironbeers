import React from "react";
import {Routes, Route} from "react-router-dom"
import HomePage from "./views/Homepage";
import Header from "./components/Header";
import Beers from "./views/Beers";

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/beers" element={<Beers/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
