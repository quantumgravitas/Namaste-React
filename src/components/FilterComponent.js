const FilterComponent=(search,restaurantList)=>{
   return  restaurantList.filter((restaurant)=>{
       let matchingCuisine=false ;
       const{cuisines}=restaurant.info ;
       cuisines.forEach((cuisine)=>{
        if(cuisine.toLowerCase().includes(search.toLowerCase()))
        {
          matchingCuisine=true;
        }
       });
       return matchingCuisine || restaurant.info.name.toLowerCase().includes(search.toLowerCase());
    })
}
export default FilterComponent;