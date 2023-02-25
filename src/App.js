// src/App.js
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox.jsx';
import { Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const foodListCopy = [...foodList];
  const [form, setForm] = useState(false);

  const addNewFood = (food) => {
    const updatedFoods = [...foodList, food];

    setFoodList(updatedFoods);
  };

  function searchFood(keyword) {
    const filteredFood = foodListCopy.slice().filter((food) => {
      return (
        food.name.slice(0, keyword.length).toLowerCase() ===
        keyword.toLowerCase()
      );
    });
    setFoodList(filteredFood);
  }

  function deleteFood(foodToDelete) {
    const deletedFoodList = foodListCopy.slice().filter((food) => {
      return food.name !== foodToDelete;
    }); 
    setFoodList(deletedFoodList)

  }

  function toggleForm() {
    form ? setForm(false) : setForm(true)
   
  }

  return (
    <div className="App">
      <hr />
      {/* <Search /> */}
      <Search search={searchFood} />

      <hr />

      <hr />
      <button onClick={() => toggleForm()}>
        {form ? 'Hide the form' : 'Add new food'}
      </button>
      {form && <AddFoodForm addFood={addNewFood} />}

      <hr />
      <h1>Food List</h1>
      <hr />

      <Row>
      {foodList.length >0 ?
        (foodList.map((food) => {
          return <FoodBox food={food} delete={deleteFood} />; 
        }))
        : <img src="" alt="no food" />
      }


        
        
       
      </Row>
    </div>
  );
}
export default App;


 /* Object destructuring:
        {foodList.map((food) => {
          return <FoodBox {...food} delete={deleteFood} />; 
        })} */