import { useRouteError } from "react-router-dom";
const Error=()=>{
  const error=useRouteError();
  const {status,statusText}=error ;
  return (
    <div className="error-page">
      <h2>OOPS! Something went wrong</h2>
    </div>
  )
}
export default Error ;
      
      