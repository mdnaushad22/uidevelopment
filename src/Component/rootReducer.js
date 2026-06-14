import { combineReducers } from "redux";
import { userData } from './userReducer';
import { loggedUserData } from './loggedUserReducer';

export default combineReducers({
   userData,
   loggedUserData
})