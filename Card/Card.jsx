import React from 'react'
import './Card.scss'
function Card({item}) {
  return (
    <div className="cardpage">
<div className="imgcontainer">
<img src={item.images} className="cardimg"></img>
</div>
<div className="textcontainer">
<h5 className='cardtitle'>{item.title}</h5>
<span className='cardprice'>${item.price}</span>
<span className='cardaddress'>{item.address}</span>
<div className='roomspecs'>
<div className="bed">
<img src='../pics/bed.png'/>
<span className='cardaddress'>{item.bedroom} Bedroom</span>
</div>
<div className="bath">
<img src='../pics/bath.png'/>
<span className='cardaddress'>{item.bathroom} Bathroom</span> 
</div>

</div>
</div>
    </div>
  )
}

export default Card
