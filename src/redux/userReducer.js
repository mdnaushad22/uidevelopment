import { USER_LIST } from "./constant"

export const userData  = (data = [], action) => {
     console.warn("data", data)
     console.warn("action", action.type)
     console.warn("action data", action.data)
    switch (action.type) {
            case USER_LIST:
                console.warn("Added uder", action.data)
                return [...action.data]
            
        default:
            return data
    }
}