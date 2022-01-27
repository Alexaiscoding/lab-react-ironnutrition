import React from 'react';
import {useState} from 'react'
const FoodBox = (props) => {
  console.log(props)
	const {food} = props;

  
  const[count, setCount] = useState (0)
  const handleChange = (e) => {
    setCount(e.target.value);};

    return(

<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={food.image} alt=""/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" onChange={handleChange} type="number" value="{count}" />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
          <button className="button" onClick={() => addFood (food,count)}> </button>
        </div>
      </div>
    </div>
  </article>
</div>
      
    )
}

export default FoodBox;