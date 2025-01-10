import React, { useState } from 'react'
import "./Slider.scss" 
function Slider({images}) {
  const[imageindex,setimageindex]=useState(0);
  function changedirection(direction) {
   if(direction=="left"){
if(imageindex===0){
  setimageindex(images.length-1)
}
else{
  setimageindex(imageindex-1)
}
   }
   else{
if(imageindex===images.length-1){
  setimageindex(0)
}
else{
  setimageindex(imageindex+1)
}
   }
  }
  function changepics(index){
    setimageindex(index)
  }
  return (
    <div className="slider">
      <div className="mainpic">
      
      <img src='../pics/arrow.png' className='leftarrow'
      
      onClick={() => changedirection("left")}></img>
      {
        imageindex!==null&&(
          <img src={images[imageindex]} className='showcaseimg'></img>
        )
      }
     
      <img src='../pics/arrow.png'className='rightarrow'
      onClick={() => changedirection("right")}
      ></img>
      </div>
      <div className="sidepics">
{images.slice(1).map((itm,index)=><img key={index}src={itm}
onClick={()=>changepics(index)}
 className='sideimages'/>)
}
      </div>     
    </div>
  )
}
export default Slider
