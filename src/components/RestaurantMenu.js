import {useEffect,useState} from "react";
import { MENU_URL,MENUIMAGE_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu=()=>{

  const[resInfo,setResInfo]=useState(null);
  const {restaurantId}=useParams();

  useEffect(()=>{
    fetchRestaurantInfo();
  },[]);
 
  const fetchRestaurantInfo=async()=>{
           const data= await fetch(MENU_URL+restaurantId);
          const json= await data.json();
          setResInfo(json.data);
  }

   if(resInfo===null)
    {
      return <Shimmer/>
    }
    const {name,costForTwoMessage,cuisines,avgRatingString,totalRatingsString}=resInfo.cards[2].card.card.info ;

    const {itemCards}=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card ;
    return (
    <div className="restaurant-menu">
       <h1>{name}</h1>
       <h2>{costForTwoMessage}</h2>
       <h2>{cuisines.join(",")}</h2>
       <h2>{avgRatingString}</h2>
       <h2>{totalRatingsString}</h2>
       <ul>
         {itemCards.map((item)=>
           <li key={item.card.info.id} className="menu-item">
              <div className="menu-content">
                <h3 className="menu-title">{item.card.info.name}</h3>  
                <p className="menu-price">{item.card.info.price/100} Rupees</p>
                <p className="menu-description">{item.card.info.description}</p>
                <button className="menu-button">ADD</button>
          </div>
          <div className="menu-image">
          <img src={MENUIMAGE_URL+item.card.info.imageId}/>
          </div>   
         </li> )}
       </ul>
    </div>
  )
          
}
export default RestaurantMenu ;
      
        