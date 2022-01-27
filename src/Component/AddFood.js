import React from 'react';
import { useState } from 'react';

const AddFood = ({setIsClicked}) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');
  const handleNameInput = (e) => setName(e.target.value);
  const handleCalorieseInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);

  const handleSubmit = (e) => { e.preventDefault();
  const newFood = { name:name, calories:calories, image:image} 
  AddFood (newFood)
  setName("")
  setCalories(0)
  setImage("")
  setIsClicked (true)
console.log("Submitted,newMovie");}


  return (
    <div>
      <h4 className="add" onClick={() => {}}> {setIsClicked ? <span> UNDO </span>: <span> ok </span>} Add New Food </h4>
      <form action="">
        <label for=""> Name</label>
        <input
          type="text"
          name="name"
          id=""
          value={name}
          onChange={handleNameInput}
        />
        
        <label for=""> Calories</label>
        <input
          type="text"
          name="calories"
          id=""
          value={calories}
          onChange={handleCalorieseInput}
        />

        <label for="">Image</label>
        <input
          type="file"
          name="image"
          id="image"
          value={image}
          onChange={handleImageInput}
        />

        <button>Submit </button>
      </form>
    </div>
  );
};

export default AddFood;
