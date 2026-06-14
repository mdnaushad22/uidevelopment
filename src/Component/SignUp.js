import {React,useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loggedUser } from "../redux/loggedUserAction";
const SignUp=()=>{
    const [name, setName]=useState("");
    const [password, setPass]=useState("");
    const [email, setEmail]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();
    // const userData = useSelector(state => state.loggedUser);
    //console.log('us data:', userData);

    useEffect(() => {
        let auth=localStorage.getItem("user");
        console.log(auth);
        if(auth){
            navigate("/");
        }        
      }, []);
    
    const collectData= async()=>{
        console.warn(name,password,email);
        const result= await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{'content-type':'application/json'}
        });
        console.log(result);
        const data= (await result.json());
        console.log(data);
        localStorage.setItem("user",JSON.stringify(data));
        if(data){
            dispatch(loggedUser(data));
            navigate("/");
        }
    }
    return(
        <div className="regdiv">
            <h1>Register</h1>
            <input className="inputfield" 
            value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Input name"/>
            <input className="inputfield" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Input email"/>
            <input className="inputfield" value={password} onChange={(e)=>setPass(e.target.value)} type="text" placeholder="Input password"/>
            <button className="btnsign" 
            onClick={() => collectData()}>Sign In</button>
        </div>
    )
}
export default SignUp;

//dispatch(addUser(name,email,password))