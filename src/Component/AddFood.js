import React from 'react';
import { useState } from 'react';

const AddFood = ({addFood}) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');
  const handleNameInput = (e) => setName(e.target.value);
  const handleCalorieseInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);

  const handleSubmit = (e) => { e.preventDefault();
  const food = { name:name, calories:calories, image:image} 
  /* addFood (newFood) */
  setName("")
  setCalories(0)
  setImage("")
console.log("Submitted,newFood");}
const[show, setShow] = useState(true)

  return (
    <div>
      <h4 > Add New Food </h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name</label>
        <input
          type="text"
          name="name"
          id=""
          value={name}
          onChange={handleNameInput}
        />
        
        <label htmlFor="calories"> Calories</label>
        <input
          type="text"
          name="calories"
          id=""
          value={calories}
          onChange={handleCalorieseInput}
        />

        <label htmlFor="image">Image</label>
        <input
          type="file"
          name="image"
          id="image"
          value={image}
          onChange={handleImageInput}
        />

        <button className="submit" onClick={() => setShow(!show)}>{ show ? "hide" : "Show"} Submit Food </button>
      </form>
    </div>
  );
};

export default AddFood;
