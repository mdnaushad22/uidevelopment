import React,{ useEffect, useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { loginUser } from "../../redux/loggedUserAction";
import { useNavigate } from "react-router-dom";
import { resetLogoutUser } from "../../redux/loggedUserAction";

const Login=()=>{
    const [email, setEmail]=useState("");
    const [password, setPass]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userData = useSelector(state => state.loggedUserData);
    
    const loginBtn=()=>{       
        dispatch(loginUser(email,password))
    }
    useEffect(()=>{
        debugger;
        if(userData.length!=0){
            console.log(userData);           
            navigate("/");
        }
    },[userData])
   
    return(
        <div className="regdiv">
        <h1>Login</h1>        
        <input className="inputfield" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Input email"/>
        <input className="inputfield" value={password} onChange={(e)=>setPass(e.target.value)} type="text" placeholder="Input password"/>
        <button className="btnsign" 
        onClick={() => loginBtn()}>Login</button>
    </div>
    )
}
export default Login