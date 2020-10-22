import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
export default function moviesReducer(state = initialState.movies, action) {
  switch (action.type) {
    case actionTypes.SET_MOVIES:
      return action.payload;
    default:
      return state;
  }
}
