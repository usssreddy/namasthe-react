import { useRouteError } from "react-router";

const Error = ()=>{
   const error =  useRouteError();
    return(
        <div className="error">
            <h1>opps............</h1>
            <h3>{error.status}</h3> 

        </div>
    )
};

export default Error;