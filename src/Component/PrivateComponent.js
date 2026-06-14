import React from "react";
import { useSelector } from "react-redux";
import { Outlet ,Navigate} from "react-router-dom";

const PrivateComponent=()=>{
    
    const userData = useSelector(state => state.loggedUserData);
    const auth=localStorage.getItem("user");
    return(
        auth?<Outlet/>:<Navigate to="/signup"></Navigate>
    )
}

export default PrivateComponent