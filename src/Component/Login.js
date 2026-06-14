import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPass]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate("/");
        }
    },[])
    const handallogin=async()=>{
        const result= await fetch('http://localhost:5000/register',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{'content-type':'application/json'}
        })
        const data=(await result.json);
        console.warn(data);
        if(data){
            localStorage.setItem("user",JSON.stringify(data));
            navigate("/");
        }else{
            navigate("/login");
        }
    }
    return(
        <div className="login">
            <input className="inputfield"  type="text" placeholder="Enter email" value={email}
             onChange={(e)=>setEmail(e.target.value)} />
             <input className="inputfield"  type="text" placeholder="Enter password" value={password}
             onChange={(e)=>setPass(e.target.value)} />
             <button className="btnsign" onClick={handallogin}>Sign In</button>
        </div>
    )
}
export default Login