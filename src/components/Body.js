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
       <div className="flex m-4 items-center">
           <div>
              <button onClick={()=>{
                  const filteredList=listOfRestaurants.filter((restaurant)=> restaurant.info.avgRating>=4.5)
                  setFilterListOfRestaurants(filteredList);}} className="bg-green-700 text-white cursor-pointer font-semibold px-4 py-4 text-md rounded-xl">
                  Show Top Rated Restaurants 
              </button>
           </div> 
       <div className="flex items-center">
        <div>
         <input type="text" className="border border-black ml-4 px-8 py-2"
         value={searchTerm}
         onChange={(event)=>setSearchTerm(event.target.value)}
         onKeyDown={(event)=>{
          if(event.key==='Enter')
          {
            setFilterListOfRestaurants(FilterComponent(searchTerm,listOfRestaurants)); 
          }
        }}/>
        </div>
        <div>
        <button className="bg-green-700 text-white py-2 px-2 text-base" onClick={()=>{
          setFilterListOfRestaurants(FilterComponent(searchTerm,listOfRestaurants));
        }}>Search</button>
        </div>
       </div>
       </div> 
       <div className="flex flex-wrap p-0">
         {filterListOfRestaurants.map((restaurant)=>(<Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} className="link-no-underline"><RestaurantCard resData={restaurant}/></Link>))};
       </div>
       
     </div>
   )
 }
 export default Body;

 

    

 
  
