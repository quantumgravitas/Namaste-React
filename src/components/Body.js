import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import FilterComponent from "./FilterComponent";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestaurants from "../utils/useListOfRestaurants";
import { useLocation } from "react-router-dom";
const Body=()=>{
  const [filterListOfRestaurants,setFilterListOfRestaurants]=useState([]);
  
  const [searchTerm,setSearchTerm]=useState("");

  const listOfRestaurants=useListOfRestaurants(); 
  const location=useLocation(); 
  useEffect(()=>{
    if(location.pathname==='/')
    {
    setFilterListOfRestaurants(listOfRestaurants);
    }
      
  },[listOfRestaurants,location.pathname])
  
   const onlineStatus=useOnlineStatus();
 
   if(onlineStatus===false)
   return <h1>Look's like your internet connection is gone.please check your internet connection</h1> 
   
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
            setFilterListOfRestaurants(FilterComponent(searchTerm,listOfRestaurants)); 
          }
        }}/>
        <button className="search-button" onClick={()=>{
          setFilterListOfRestaurants(FilterComponent(searchTerm,listOfRestaurants));
        }}>Search</button>
       </div>
       </div> 
       <div className="restaurant-container">
         {filterListOfRestaurants.map((restaurant)=>(<Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} className="link-no-underline"><RestaurantCard resData={restaurant}/></Link>))};
       </div>
       
     </div>
   )
 }
 export default Body;

 

    

 
  
