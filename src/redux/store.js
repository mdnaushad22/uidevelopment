import { configureStore } from "@reduxjs/toolkit"; 
import userSaga from './userSaga';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./rootReducer";

const sagaMiddleware=createSagaMiddleware();
const store = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
})
sagaMiddleware.run(userSaga);
export default store


