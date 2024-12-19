import { useState,useEffect,useContext,createContext } from "react";
import RestaurantCard ,{WithPromotedResCard}from "./RestaurantCard";
import FilterComponent from "./FilterComponent";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestaurants from "../utils/useListOfRestaurants";
import UserContext from "../utils/UserContext";
import { SearchContext } from "../utils/SearchContext";
const Body=()=>{
  const[filterListOfRestaurants,setFilterListOfRestaurants]=useState([]); 
  const listOfRestaurants=useListOfRestaurants();  
  
  const PromotedRestaurantCard = WithPromotedResCard(RestaurantCard);
 
  const {searchTerm} =useContext(SearchContext); 

  const onlineStatus=useOnlineStatus();
  
  if(onlineStatus===false)
  return <h1>Look's like your internet connection is gone.please check your internet connection</h1> 
   
  const {setUserName,loggedInUser}=useContext(UserContext);
  
  useEffect(()=>{
     setFilterListOfRestaurants(listOfRestaurants)
  },[listOfRestaurants])

  useEffect(()=>{
    setFilterListOfRestaurants(FilterComponent(searchTerm,listOfRestaurants))
  },[searchTerm])
  
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
        <div className="mx-2">
         <label className="mx-0 text-lg">UserName</label> 
         <input type="text" className="border-2 border-black mx-1 px-8 py-2 "value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}/>
       </div>
      </div>
      </div> 
      <div className="flex flex-wrap p-0">
        {filterListOfRestaurants.map((restaurant)=>
         (<Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} className="link-no-underline">
           {
             restaurant.info.isOpen? <PromotedRestaurantCard resData={restaurant}/> : <RestaurantCard resData={restaurant}/>
           }
         </Link>))};
         
      </div>
      
    </div>
  )
}

export default Body;
  
     
  

   
  


 

    

 
  
