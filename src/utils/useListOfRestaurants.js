import {useState,useEffect} from "react";
import { API_URL } from "./constants";
const useListOfRestaurants=()=>{
  const [listOfRestaurants,setListOfRestaurants]=useState([]);
  useEffect(()=>{
    fetchData();
  },[]);
   const fetchData=async()=>{
       const data=await fetch(API_URL);
       const json=await data.json();
       setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
   }
  return listOfRestaurants ;
}
export default useListOfRestaurants;