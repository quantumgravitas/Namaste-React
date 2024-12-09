import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import FilterComponent from "./FilterComponent";
import Shimmer from "./Shimmer";
import { API_URL } from "../../utils/constants";
const Body=()=>{
  //Array destructuring
  //const arr=useState(restaurantList)
  //const listofRestaurants=arr[0]
  //const setListOfRestaurants=arr[1]
  //useState is hook in the react and maintains the local state of the variables.
  //As soon as  statevariable is changed it will rerender UI
  const [listOfRestaurants,setListOfRestaurants]=useState([]);
  const [filterListOfRestaurants,setFilterListOfRestaurants]=useState([]);
  const [searchTerm,setSearchTerm]=useState("");
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData=async()=>{
    
     const data= await fetch(API_URL) ;

     const json= await data.json();
    
     setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    
     setFilterListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }

  return filterListOfRestaurants.length===0?(<Shimmer/>): (
 

    <div className="body">
      <div className="filter">
          <button onClick={()=>{
            const filteredList=listOfRestaurants.filter((restaurant)=> restaurant.info.avgRating>=4.5)
            setFilterListOfRestaurants(filteredList);}} className="filter-button">
            Show Top Rated Restaurants 
          </button> 
      <div className="search">
        <input type="text" className="search-bar js-search-bar"
        value={searchTerm}
        onChange={(event)=>setSearchTerm(event.target.value)}
        onKeyDown={(event)=>{
         if(event.key==='Enter')
         {
           const list=FilterComponent(searchTerm,listOfRestaurants);
           setFilterListOfRestaurants(list); 
         }
       }}/>
       <button className="search-button" onClick={()=>{
         const filterList=FilterComponent(searchTerm,listOfRestaurants);
         setFilterListOfRestaurants(filterList);
       }}>Search</button>
      </div>
      </div> 
      <div className="restaurant-container">
        {filterListOfRestaurants.map((restaurant)=>(<RestaurantCard key={restaurant.info.id}resData={restaurant}/>))};
      </div>
      
    </div>
  )
}
export default Body;
    

 
  
