import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from "../assets/home.png"


export default function Header (){

    return(
        <div>
            <NavLink to="/" > <img src={homeimg} alt=""/></NavLink>
        </div>
    )

}