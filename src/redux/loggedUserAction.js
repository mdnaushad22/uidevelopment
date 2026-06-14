import { LOGIN_USER,SET_LOGGED_USER,RESET_LOGOUT_USER } from "./constant"

export const loggedUser = (data) => {   
    console.warn("action data", data)    
    return {
        type: SET_LOGGED_USER,
        data
    }
}
export const loginUser = (email,password) => { 
    
    console.warn("action data", password)    
    return {
        type: LOGIN_USER,
        email,password
    }
}
export const resetLogoutUser = () => {   
    return {
        type: RESET_LOGOUT_USER
    }
}