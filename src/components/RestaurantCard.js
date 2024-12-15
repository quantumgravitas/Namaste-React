import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
  const {resData}=props;
  const{cloudinaryImageId,name,cuisines,avgRating,sla,costForTwo}=resData?.info ;
  return (
    <div className="res-card">
      <img className="res-image"
      src={CDN_URL+cloudinaryImageId}/>
      
     <h3>{name}</h3>
     <h3>{cuisines.join(",")}</h3>
     <h4>{avgRating}stars</h4>
     <h4>{sla.deliveryTime} Min</h4>
     <h4>{costForTwo}</h4>
    </div>
  )
}
export default RestaurantCard;