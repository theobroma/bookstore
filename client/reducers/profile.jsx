import { SET_PROFILE } from '../actions/types';

const initialState = {
  username: "",
  firstname: "",
  lastname : ""
};

//[...state, action.payload] didnt work correctly
export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_PROFILE:
      return action.payload;
    default: return state;
  }
}
