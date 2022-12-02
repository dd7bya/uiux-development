import './App.css';
import { useState, useEffect } from "react";

import ItemCard from "./components/ItemCard";
import FilterSortBar from "./components/FilterSortBar";
import BuiltWorkout from './components/BuiltWorkout';
import workoutData from "./assets/bootcamp-data.json";


workoutData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/images/" + item.image;
});

workoutData.forEach((item) => {
  if (item.optional === true) {
    item.optionalString = " (optional)";
  }
  else {
    item.optionalString = "";
  }
});

workoutData.forEach((item) => {
  item.equipmentString = item.equipment.join(", ")
});

//sorts itemData, and then filters to a new variable, filteredData

function App() {
  const [targetFilterType, setTargetType] = useState("All");
  const [cartData, setCart] = useState([]); //cart starts as empty list
  const [totCalories, setCalSum] = useState(0); //aggregated calories starts at 0
  const [itemData, setItems] = useState(workoutData); //changes upon sort
  const [checkedFilters, setCheckedFilters] = useState([]);


  const addItem = (item) => {
    setCart([...cartData, {
      name: item.name, caloriesBurned: item.caloriesBurned, equipment: item.equipment, equipmentString: item.equipmentString, optional: item.optional, bodyPart: item.bodyPart, image: item.image,
      key: Date.now()
    }]);
    setCalSum(parseFloat((totCalories + item.caloriesBurned).toFixed(1)))
  }
  //add item to cart, and increase calculated calorie burn

  const remItem = (i) => {
    setCart(cartData.filter((item) => i.key != item.key));
    setCalSum(parseFloat((totCalories - i.caloriesBurned).toFixed(1)));
  }

  const sortData = () => {
    let sortedData = [...itemData]; //copying itemData to new array (if it's same array, just modified, it still points to same array and React won't re-render)
    setItems(sortedData.sort((a, b) => {
      return b.caloriesBurned - a.caloriesBurned;
    }))
  }

  const resetSort = () => {
    setItems(workoutData)
  }

  const handleTargetFilterChange = (target) => { //filter by target
    setTargetType(target);
  };
  /* sets the state to the selected type, function passed to
  the onSelect event handler of HTML buttons */

  const matchesTargetFilterType = (item) => {
    if (targetFilterType === "All") {
      return true;
    }
    else if (targetFilterType.toLowerCase() === item.bodyPart.toLowerCase()) {
      return true;
    }
    else {
      return false;
    }
  }
  //creates a filtering condition for body part

  const handleEqFilterChange = (value, isChecked) => {
    if (isChecked) {
      setCheckedFilters([...checkedFilters, value.toLowerCase()]);
    }
    else if (!isChecked){ //unchecked
      const index = checkedFilters.indexOf(value.toLowerCase());
      let newCheckedFilters = checkedFilters.splice(index, 1); //remove 1 item at that index
      setCheckedFilters(newCheckedFilters);
    }
    console.log(checkedFilters)
  }

  const matchesEquipmentFilterTypes = (item) => {
    if (checkedFilters.length === 0) { //no selected filters
      return true;
    }
    else if (checkedFilters.includes("not required") && item.optional === true) { //equipment is optional for item, and "None" is selected
      return true;
    }
    else {
      return ((checkedFilters).some((e) => item.equipment.includes(e.toLowerCase()))); //is any element in checkedFilters included in item.equipment?
    }
  }
  //creates a filtering condition for equipment
  let filteredData = itemData.filter(matchesTargetFilterType).filter(matchesEquipmentFilterTypes)


  return (

    <div className="App">
      <h1 className="fw-bold display-2">BOOTCAMP BUILDER</h1>
      <FilterSortBar sortData={sortData} resetSort={resetSort} handleTargetFilterChange={handleTargetFilterChange} handleEqFilterChange={handleEqFilterChange} />

      {['end'].map((placement) => (
        <BuiltWorkout placement={placement} name={placement} cartData={cartData} totCalories={totCalories} remItem={remItem} />
      ))}


      <div className="Exercises">
        {filteredData.map((item) => {
          return (<ItemCard name={item.name} image={item.image} caloriesBurned={item.caloriesBurned} optionalString={item.optionalString} equipment={item.equipment} equipmentString={item.equipmentString} bodyPart={item.bodyPart} addItem={addItem} />);
        })}
      </div>

    </div>
  );

}

export default App;
