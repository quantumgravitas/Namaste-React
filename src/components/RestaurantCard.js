import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
  const {resData}=props;
  const{cloudinaryImageId,name,cuisines,avgRating,sla,costForTwo}=resData?.info ;
  return (
    <div className="m-1 w-[292px] h-[350px] relative bg-white rounded-lg  border-transparent transition-all ease-in-out duration-300 hover:shadow-lg hover:border-gray-400 hover:bg-gray-50">
      <img className="p-2 w-full h-[200px] fit-cover "
      src={CDN_URL+cloudinaryImageId}/>
      <h3 className="font-extrabold px-4 py-0 text-[22px] text-lg">{name}</h3>
      <div className="flex flex-wrap items-center p-0">
        <h4 className="font-bold px-4 py-0">{avgRating}stars</h4>
        <h4 className="font-bold px-0 py-1">{sla.deliveryTime} Min</h4>
      </div>
     <h3 className="font-semibold px-3 py-1 text-[16px] text-gray-600 truncate">{cuisines.join(",")}</h3>
     <h4 className="font-semibold px-3 py-0">{costForTwo}</h4>
    </div>
  )
}
     
      


export const WithPromotedResCard=(RestaurantCard)=>{
   return (props)=>{
     return (
      <div>
         <div className=" absolute inline-flex items-center bg-gradient-to-r from-black-500 to-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-2"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      d="M8.293 14.707a1 1 0 010-1.414L10.586 11 8.293 8.707a1 1 0 011.414-1.414l2.293 2.293a1 1 0 010 1.414l-2.293 2.293a1 1 0 01-1.414 0z"
    />
  </svg>
  Open
</div>

        <RestaurantCard {...props}/>
      </div>
     )
   }
}
export default RestaurantCard;