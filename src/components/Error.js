import { useRouteError } from "react-router-dom";
const Error=()=>{
  const error=useRouteError();
  const {message,stack}=error.error ;
  const {status,statusText}=error ;
  return (
    <div className="error-page">
      <h2>OOPS! Something went wrong</h2>
      <h3>{message}</h3>
      <h3>{stack}</h3>
      <h3>Status:{status}</h3>
      <h4>StatusText:{statusText}</h4>
    </div>
  )
}
export default Error ;