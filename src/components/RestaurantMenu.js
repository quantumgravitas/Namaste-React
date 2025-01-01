import { MENUIMAGE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import{useState} from "react";
const RestaurantMenu=()=>{
  
  const {restaurantId}=useParams();
  
  const resInfo=useRestaurantMenu(restaurantId);
  
  const[showIndex,setShowIndex]=useState(null);

  if(resInfo===null) return <Shimmer/>
 
  const {name,costForTwoMessage,avgRatingString,totalRatingsString,locality,sla}=resInfo.cards[2].card.card.info ;
  
  const {itemCards}=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card ;
  
  const itemCategories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
    return  c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  })
   
    return (
    <div className="text-center">
       <div>        
          <h1 className="font-extrabold text-2xl my-4 shadow-slate-400">{name}</h1>
          <div className="border border-gray-300 w-[750px] m-auto p-4 rounded-xl">
              <div className="flex justify-center">  
              <h2 className="mx-3 font-bold text-md">{avgRatingString} ({totalRatingsString})</h2>
              <h2 className="mx-2 font-bold text-lg">{costForTwoMessage}</h2>
              </div>
              <div>
                <div className="flex justify-center my-2">
                <p className="mx-2 font-bold text-md">Outlet</p>
                <p className="font-semibold text-md text-gray-400">{locality}</p>
                </div>
                <h3 className="text-sm font-semibold">{sla.slaString}</h3>
              </div>
          </div>
        </div>
 
        {itemCategories.map((category,index)=>
        <RestaurantCategory key={category.card.card.title}
        data={category?.card?.card} 
        showItems={ index===showIndex ? true : false}
        setShowIndex={()=> setShowIndex(index===showIndex?null:index)}/>)} 
        {console.log("menu rendered")}    
    </div>
  )
          
}
       
      
             
         
        
         
         
                

          
      
       
      
export default RestaurantMenu ;
      
        