import { SET_LOGGED_USER,RESET_LOGOUT_USER } from "./constant"

export const loggedUserData  = (data = [], action) => {
    debugger;
    console.warn("data", data)
    console.warn("action", action.type)
    console.warn("action data", action.data)
    switch (action.type) {
        case SET_LOGGED_USER:            
            console.warn("Added uder", action.data)
            return [...data,action.data]
        case RESET_LOGOUT_USER:            
            console.warn("Added uder", data)
            data = []
            return data
        default:
            return data
    }
}