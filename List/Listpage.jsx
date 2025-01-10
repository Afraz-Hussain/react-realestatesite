import React from 'react'
import Card from '../Card/Card'
import { listData } from '../../assets/Data'
import Filter from '../Filterbar/Filter'
function Listpage() {
  const data=listData
  return (
    <div className="listpage">
      <div className="leftside">
      <div>
        <Filter/>
      </div>
      <div>
     {
      data.map((item=>(<Card key={item.id} item={item}/>)))
     }
    </div>
      </div>
      <div className="rightside">

      </div>
    </div>
  )
}

export default Listpage
