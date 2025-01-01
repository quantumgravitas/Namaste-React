const { createContext,useState } = require("react");

 export const SearchContext=createContext();
 
 export const SearchProvider=({children})=>{

  const [searchTerm,setSearchTerm]=useState();
  
  const [filterListOfRestaurants,setFilterListOfRestaurants]=useState([]);
  return(
    <SearchContext.Provider value={{searchTerm,setSearchTerm,filterListOfRestaurants,setFilterListOfRestaurants}}>
       {children}
    </SearchContext.Provider>
  )
}

