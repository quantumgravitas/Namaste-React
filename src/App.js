import React, { lazy,Suspense, useEffect,useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header" ;
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext";
import { SearchProvider } from "./utils/SearchContext";
import { ParentComponent } from "./components/ParentComponent";
import {Provider} from "react-redux";
import appStore from "./utils/AppStore";
import Cart from "./components/Cart";
const AppLayout=()=>{
  const [userName,setUserName]=useState("");
  useEffect(()=>{
  const data=({
    user:"Mayur Godase"
  })
  setUserName(data.user)
  },[])
  
  return(
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
      <SearchProvider>  
        <div className="app-layout">
          <Header/>
          <Outlet/>
        </div>
      </SearchProvider>
    </UserContext.Provider>
    </Provider>
  )
}
      
    
const About=lazy(()=>import("./components/About"));

const appRouter=createBrowserRouter([{
  path:"/",
  element: <AppLayout />,
  children:[
     {
       path:"/",
       element:<Body/>
     },
    {
      path:"/about",
      element: <Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>
    },
    {
      path:"/contact",
      element: <Contact/>
    },
    {
      path:"/restaurants/:restaurantId",
      element: <RestaurantMenu />
    },
    {
      path:"/parent",
      element: <ParentComponent/>
    },
    {
      path:"/cart",
      element: <Cart/>
    }
    
  ],
  errorElement: <Error/>
},
])
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);





        
        