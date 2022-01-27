import React from 'react';
import {useState} from 'react';


const AddFood = () => {
    const[ name, setName]= useState('');
    const [calories, setCalories] = useState('');
    const [ image, setImage]= useState('');

    return (

<div>   
    <h4> Add New Food  </h4>
        <form action="">

<label for=""> Name</label>
<input type="text" name="name" id="" value={name} />

<label for=""> Calories</label>
<input type="text" name="calories" id="" value={calories} />

<label for="">Image</label>
<input type="text" name="image" id="" value={image}/ >



            <button>Add new food </button>
            
        </form>


   
        </div>
    )
}


export default AddFood; 
