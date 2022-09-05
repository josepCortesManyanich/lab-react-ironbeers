import React, {useState, useEffect} from "react";
import axios from "axios";



export default function RandomBeer(){
const [beers, setBeer] = useState({})


useEffect(() => {
    const getSingle =  async () =>{
        try {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            console.log(response.data)
            setBeer(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    getSingle()
},[])

return(
    <div>
        {beers&&(
            <div>
                <img src={beers.image_url} alt=""/>
                <h1>{beers.name}</h1>
                <h1>{beers.attenuation_level}</h1>
                <h1>{beers.tagLine}</h1>
                <h1>{beers.first_brewed}</h1>
                <h1>{beers.description}</h1>
                <h1>{beers.contributed_by}</h1>
            </div>
        )}
        
    </div>
)

}