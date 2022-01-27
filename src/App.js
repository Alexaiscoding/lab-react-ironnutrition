import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Component/FoodBox'
import AddFood from './Component/AddFood'

function App() {
  return (
    <div className="App">
<AddFood/>
{/*  display the list    */}
+
 {
  foods.map ((oneFood)=> { 
    return <FoodBox key={oneFood.name} food={oneFood}/>
   })
}



</div>
  );
}

export default App;


