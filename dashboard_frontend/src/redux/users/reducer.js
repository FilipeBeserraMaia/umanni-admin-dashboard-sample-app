import usersActionTypes from "./action-types";

const initialState = {
  collection:[]
}

const usersReducer = (state=initialState,action) => {

  switch (action.type) {
    case usersActionTypes.INDEX:
      return {
        ...state,
        collection: action.payload
      };
    case usersActionTypes.DELETE:
      return {
        ...state,
        collection: state.collection.filter(u => u.id != action.deletedUserId)
      };


    default:
      return state;
  }
}

export default usersReducer;
