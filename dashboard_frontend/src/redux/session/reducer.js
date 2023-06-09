import sessionActionTypes from "./action-types";

const initialState = {
  isLogged: true,
  user: {}
}




const sessionReducer = (state=initialState,action) => {

  switch (action.type) {
    case sessionActionTypes.LOGIN:
      return {
        ...state,
        isLogged:true,
        user:action.payload
      };
    case 'LOGOUT':
      return {
        ...initialState
      };
    case 'UPDATE-USER':
      return {
        ...state,
        user:action.payload
      };
    default:
      return state;


  }
}


export default sessionReducer;
