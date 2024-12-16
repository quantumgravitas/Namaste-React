import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
  const {resData}=props;
  const{cloudinaryImageId,name,cuisines,avgRating,sla,costForTwo}=resData?.info ;
  return (
    <div className="m-1 w-[292px] bg-slate-200 h-[550px] rounded-lg">
      
      <img className="p-2 h-[342px] object-fill object-center"
      src={CDN_URL+cloudinaryImageId}/>
    
     <h3 className="font-extrabold px-4 py-0 text-[22px] text-lg">{name}</h3>
     <h3 className="font-bold px-3 py-2 text-base">{cuisines.join(",")}</h3>
     <h4 className="font-semibold px-3 py-0">{avgRating}stars</h4>
     <h4 className="font-medium px-3 py-1">{sla.deliveryTime} Min</h4>
     <h4 className="font-semibold px-3 py-2">{costForTwo}</h4>
    </div>
  )
}
export default RestaurantCard;