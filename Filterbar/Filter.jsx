import React from 'react'
import './Filter.scss'
function Filter() {
  return (
    <div className="filterpage">
<div className="topbar">
<label htmlFor='city'>Location</label>
<input 
type='text'
id='city'
name='city'
placeholder='Enter City Location: '
/>
</div>

<div className='bottombar'>
<div className="item">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="type">property</label>
          <select
            name="type"
            id="type">
            <option value="">any</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="land">land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="type">minPrice</label>
          <input type='number' name="minPrice" id="minPrice" placeholder="minPrice"/>
        </div>

        <div className="item">
          <label htmlFor="type">maxPrice</label>
          <input type='number' name="maxPrice" id="maxPrice" placeholder="maxPrice"/>
        </div>
        <div className="item">
          <label htmlFor="type">Bedrooms</label>
          <input type='number' name="Bedrooms" id="Bedrooms" placeholder="Bedrooms"/>
        </div>
        <button className='btn-search'>
            <img src='../pics/search.png'></img>
        </button>
  </div>

  
    </div>
  
  )
}

export default Filter
