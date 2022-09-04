import React from "react";
import {Link} from "react-router-dom"
import beers from "../assets/beers.png";
import newbeer from "../assets/new-beer.png";
import randombeer from "../assets/random-beer.png"

export default function HomePage (){

    return(
        <div>
        <Link to="/beers">Beers</Link>
        <br></br>
        <img src={beers} alt=""/>
        <br></br>
        <Link to="/new-beer"> New Beers</Link>
        <br></br>
        <img src={newbeer} alt=""/>
        <br></br>
        <Link to="/random-beer">Random Beers</Link>
        <br></br>
        <img src={randombeer} alt=""/>


        </div>
    )
}