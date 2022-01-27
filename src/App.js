import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Component/FoodBox'
import AddFood from './Component/AddFood'
import {useState} from 'react'
import Search from './Component/search'

function App() {

/*   const[foods,setFoods] = useState([])
  const AddNewFood = (food) =>{
    setFoods([...foods, food])
  }
 */
	const [searchedString, setSearchedString] = useState("");

	let searchedFood = null;
	if (searchedString !== "") {
		searchedFood = foods.filter((food) => {
			return food.name.toLowerCase().includes(searchedString.toLowerCase());
		});
	} else {
		searchedFood = foods;
	}

  return (
    <div className="App">
    <h1> Iron Nutrition </h1>

<AddFood/>

<Search searchedString={searchedString} callbackSearch={setSearchedString}/>


 {
  foods.map ((oneFood)=> { 
    return <FoodBox key={oneFood.name} food={oneFood}/>
   })
}



</div>
  );
}

export default App;


