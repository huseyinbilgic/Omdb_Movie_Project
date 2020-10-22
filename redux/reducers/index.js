import {combineReducers} from "redux"
import moviesReducer from "./moviesReducer"
import movieDetailReducer from "./movieDetailReducer"


const rootReducer=combineReducers({
    moviesReducer,movieDetailReducer
})

export default rootReducer