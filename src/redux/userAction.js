import { ADD_USER,SET_LOGGED_USER } from "./constant"

export const addUser = (name,email,password) => { 
    const data=JSON.stringify({name,email,password}); 
   
    return {
        type: ADD_USER,
        data
    }
}