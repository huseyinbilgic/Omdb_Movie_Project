import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
export default function movieDetailReducer(
  state = initialState.movieInfo,
  action
) {
  switch (action.type) {
    case actionTypes.SET_MOVIES_INFO:
      return [action.payload];
    default:
      return state;
  }
}
