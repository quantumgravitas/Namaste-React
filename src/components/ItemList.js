import { MENUIMAGE_URL } from "../utils/constants";
const ItemList=({items})=>{
 
  return(
    
    <div>
      {items.map((item)=>(
        <div key={item.card.info.id} className="p-2 m-2  border-gray-400 border-b-2  text-left flex justify-between">
          <div className="py-2 w-9/12">
            <span className="font-semibold text-lg">{item.card.info.name}</span>
            <span className="mx-2 font-semibold">₹{item.card.info.price/100}</span>
            <p className="text-sm text-slate-700">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <img src={MENUIMAGE_URL+item.card.info.imageId} className="rounded-lg w-56 fit-cover"/>
            <div className="absolute">
              <button className="px-6 py-1 bg-white  text-green-600 font-bold text-lg rounded-xl">ADD+</button>
            </div>
          </div> 
          
          
        </div>
      ))}
    </div>
  )
}
export default ItemList ;