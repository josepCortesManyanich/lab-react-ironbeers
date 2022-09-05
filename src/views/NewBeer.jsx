import React, {useState, useEffect} from "react";
import axios from "axios";


export default function NewBeer (){
const [beers, setBeer] = useState({
    name:"",
    tagline:"",
    description:"",
    first_brewed:"",
    brewer_tips:"",
    attenuation_level:0,
    contributed_by:""
  });
  

  const handleChange = (e) => {
    setBeer(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newbeer = await axios.post(`https://ih-beers-api2.herokuapp.com/beers/newbeer`,beers);
      setBeer(newbeer)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h1>NEW BEER</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={beers.name} onChange={handleChange}/>
        <label>Tagline</label>
        <input type="text" name="tagline" value={beers.tagline} onChange={handleChange}/>
        <label>Description</label>
        <input type="text" name="description" value={beers.description} onChange={handleChange}/>
        <label>First Brewed</label>
        <input type="text" name="first_brewed" value={beers.first_brewed} onChange={handleChange}/>
        <label>Brewer Tips</label>
        <input type="text" name="brewer_tips" value={beers.brewer_tips} onChange={handleChange}/>
        <label>Attenuation Level</label>
        <input type="number" name="attenuation_level" value={beers.attenuation_level} onChange={handleChange}/>
        <label>Contributed By</label>
        <input type="text" name="contributed_by" value={beers.contributed_by} onChange={handleChange}/>
        <button type="submit">CREATE</button>
      </form>
    </div>
  )
}