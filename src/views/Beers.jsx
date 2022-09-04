import React, {useState, useEffect}from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

export default function Beers() {
    const[beers, setBeer] = useState(null)

    useEffect(() => {
        const data = async () => {
            try {
                const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
                setBeer(response.data)
                console.log(response)
            } catch (error) {
                console.error(error)
            }
        }
        data()
    },[])

    return(
        <div>
            {beers && beers.map(beer => {
                return(
                    <div key={beer._id}>
                        <p> <Link to={`/beers/beerId}`}><img src={beer.image_url} alt={beer.name}></img></Link></p> 
                  
                    </div>
                )  
                })}

           <Outlet/>
                    
                
        </div>
    )
}
console.log(Beers)