import { takeEvery, put } from 'redux-saga/effects'
import { ADD_USER,LOGIN_USER ,SET_LOGGED_USER} from './constant';


function* addUserData(data) {
    
    const userdata=data.data;
    let result= yield fetch('http://localhost:5000/register',{
        method:'post',
        body:userdata,
        headers:{'content-type':'application/json'}
    });
    console.warn("action is called", result);
    if(result.ok){
    result = yield result.json();
    console.warn("action is called", result)
    localStorage.setItem("user",result);
    console.warn("action is called", result)
    //yield put({type: GET_USER_RESPONCE, data:result})
    }
  
}

function* loginUser(data) {
    const email=data.email;
    const password=data.password;
    let result= yield fetch('http://localhost:5000/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{'content-type':'application/json'}
    });
    console.warn("action is called", result);
    if(result.ok){
        result = yield result.json();
        console.warn("action is called", result)
        localStorage.setItem("user",result);
        console.warn("action is called", result)
        yield put({type: SET_LOGGED_USER, data:result})
        
    }
  
}

function* userSaga() {
    console.warn("saga action is called")
    yield takeEvery(ADD_USER, addUserData)
    yield takeEvery(LOGIN_USER, loginUser)
}

export default userSaga