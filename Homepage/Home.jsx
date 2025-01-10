import React from 'react'
import './Home.scss'
import Searchbar from '../Searchbox/Searchbar'
function Home() {
  return (
   
       <div className="homesection">
      <div className="textcontainer">
<div className="wrapper">
<h1>Find Real Estate & Get Your Dream Place</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
Laboriosam ullam atque quas quo voluptates nobis? Architecto etur.</p>
<Searchbar/>
</div>

      </div>
      <div className="imgcontainer">
        <img src='../pics/bg.png'/>
      </div>
    
    </div>
  
    
  )
}

export default Home
