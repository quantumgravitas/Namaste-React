import { useState } from "react";
import restaurantList from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import FilterComponent from "./FilterComponent";
const Body=()=>{
  //Array destructuring
  //const arr=useState(restaurantList)
  //const listofRestaurants=arr[0]
  //const setListOfRestaurants=arr[1]
  //useState is hook in the react and maintains the local state of the variables.
  //As soon as  statevariable is changed it will rerender UI
  const [listOfRestaurants,setListOfRestaurants]=useState(restaurantList);
  const [searchTerm,setSearchTerm]=useState("");
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
      <div className="search">
       <input type="text" className="search-bar js-search-bar"
       onChange={(event)=>setSearchTerm(event.target.value)}
       onKeyDown={(event)=>{
         if(event.key==='Enter')
         {
           const list=FilterComponent(searchTerm);
           setListOfRestaurants(list);
         }
       }}/>
       <button className="search-button" onClick={()=>{
         const filterList=FilterComponent(searchTerm);
          setListOfRestaurants(filterList);
       }}>Search</button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant)=>(<RestaurantCard key={restaurant.info.id}resData={restaurant}/>))};
      </div>
    </div>
  )
}

export default Body;