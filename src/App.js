import React from "react";
import {Routes, Route} from "react-router-dom"
import HomePage from "./views/Homepage";
import Header from "./components/Header";
import Beers from "./views/Beers";
import SingleBeer from "./views/SingleBeer";
import RandomBeer from "./views/RandomBeer";
import NewBeer from "./views/NewBeer";

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/beers" element={<Beers/>}/>
        <Route path="/:id" element={<SingleBeer/>}/>
        <Route path="/random" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
