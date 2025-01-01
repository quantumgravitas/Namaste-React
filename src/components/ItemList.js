import { MENUIMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import  {addItem} from "../utils/cartSlice";
const ItemList=({items})=>{
  
  const dispatch=useDispatch() ;

  const handleAddItem=(item)=>{
    //dispatch the action
    dispatch(addItem(item))
  }
  return(
    
    <div>
      {items.map((item)=>(
        <div key={item.card.info.id} className="p-2 m-2  border-gray-400 border-b-2  text-left flex justify-between">
          <div className="py-2 w-9/12">
            <span className="font-semibold text-lg">{item.card.info.name}</span>
            <span className="mx-2 font-semibold">₹{item.card.info.price/100}</span>
            <p className="text-md text-gray-500 my-3 text-ellipsis">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 m-3">
            <img src={MENUIMAGE_URL+item.card.info.imageId} className="rounded-lg"/>
            <div className="absolute">
              <button className="px-6 py-1 bg-white  text-green-600 font-bold text-lg rounded-xl" onClick={()=>handleAddItem(item)}>ADD+</button>
            </div>
          </div> 
          
          
        </div>
      ))}
    </div>
  )
}
export default ItemList ;