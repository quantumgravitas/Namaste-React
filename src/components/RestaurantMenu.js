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
        <h1 className="font-extrabold text-2xl my-4">{name}</h1>
        <div>
          <div>
              <div className="border-black">  
                <h2>{avgRatingString}</h2>
                <h2>{totalRatingsString}</h2>
                <h2>{costForTwoMessage}</h2>
              </div>
          <h2>Outlet:{locality}</h2>
          <h3>{sla.slaString}</h3>
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
      
        