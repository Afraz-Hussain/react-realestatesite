import React, { useState } from 'react'
import './Searchbar.scss'
function Searchbar() {
   const types=["BUY","RENT"];
   const[activebtn,setactivebtn]=useState({
    type:"BUY"
   })
   function makeactive(value){
setactivebtn((prev)=>({
    ...prev,
    type:value
}
))
   }
  return (
    
    <div className="searchbar">
   <div className="buttons"> 
  
  {
    types.map((item)=>
    <button className={activebtn.type===item?"active":" "}
    onClick={()=>makeactive(item)}
    >
    {item}
    </button>)
  }
   </div>
   <div className="inputbarsection">
<input 
type='text'
placeholder='Enter Location'
/>
<input
type='number'
placeholder='Min Price'    
min={0}
max={10000000}
/>

<input
type='number'
placeholder='Max Price'    
min={0}
max={10000000}
/>
<img src='../pics/search.png' className='searchimg'></img>
   </div>
    </div>
  )
}

export default Searchbar
