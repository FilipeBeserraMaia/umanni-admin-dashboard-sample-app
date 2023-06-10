import sessionActionTypes from "./action-types";

const initialState = {
  isLogged: false,
  user: {},
  session: {}
}




const sessionReducer = (state=initialState,action) => {

  switch (action.type) {
    case sessionActionTypes.LOGIN:
      return {
        ...state,
        isLogged:true,
        user: {...action.payload.data},
        session:{...action.session}

      };
    case sessionActionTypes.LOGOUT:
      return {
        ...initialState
      };
    case sessionActionTypes.UPDATE_USER:
      return {
        ...state,user:{...action.payload} 
      };

    default:
      return state;


  }
}


export default sessionReducer;
