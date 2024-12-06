import { useState } from "react";
import restaurantList from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";
const Body=()=>{
  //Array destructuring
  //const arr=useState(restaurantList)
  //const listofRestaurants=arr[0]
  //const setListOfRestaurants=arr[1]
  //useState is hook in the react and maintains the local state of the variables.
  //As soon as  statevariable is changed it will rerender UI
  const [listOfRestaurants,setListOfRestaurants]=useState(restaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button onClick={()=>{
          const filteredList=listOfRestaurants.filter((restaurant)=> restaurant.info.avgRating>=4.5)
          setListOfRestaurants(filteredList);
        }} className="filter-button">
         Show Top Rated Restaurants 
        </button> 
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant)=>(<RestaurantCard key={restaurant.info.id}resData={restaurant}/>))};
      </div>
    </div>
  )
}
export default Body;