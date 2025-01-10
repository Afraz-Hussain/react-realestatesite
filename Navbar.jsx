import React, { useState } from 'react'
import './Navbar/Navbar.scss'
import {Link}from "react-router"
function Navbar() {
  
  const[showmenu,setshowmenu]=useState('');
  return (
    <div className="navbar">
<div className="navbar-box">
    <div className="left">
    <img src='../pics/logo.png'></img>
    <h3>React Reak Estate</h3>
    </div>
    <div className="middle">
    
    
        <ul>
        
            
          <Link to="/">Home</Link>
          <Link to="/list">All Listninings</Link>
            <li>Contact</li>
            <li>Agents</li>
        </ul>
    </div>
    <div className="right">

<button className="btn btn1">Sign in</button>
<button className="btn btn2">Sign Up</button>

    </div>
   
    </div>
    <div className="hamburger">
       <img src="../pics/menu.png" className="menuicon" onClick={()=>setshowmenu((prev)=>!prev)}/>
    </div> 
    {/* FOR MOBILE MENUS */}
    <div className={`mobilemenu ${showmenu ?'active' :""}`}>
      <div className="navlinks">
      <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Agents</li>
        </ul>
      </div>
      <div className="buttons">
      <button className="btn btn1">Sign in</button>
      <button className="btn btn2">Sign Up</button>
      </div>
    </div>
    </div>
    
    
  )
}

export default Navbar
