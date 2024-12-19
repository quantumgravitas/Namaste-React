const { createContext } = require("react");

 const UserContext=createContext({
  loggedInUser:"defaultuser",
})

export default UserContext ;

