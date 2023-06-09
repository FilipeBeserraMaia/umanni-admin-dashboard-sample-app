import usersActionTypes from "./action-types";


const replaceData = (collection,newUser) => {

  collection = collection.filter(user => user.id != newUser.id )

  return [...collection,newUser]
}

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
    case usersActionTypes.CREATE:
      return {
        ...state,
        collection: [...state.collection,action.payload]
      };
    case usersActionTypes.EDIT:
      return {
        ...state,
        collection: replaceData(state.collection,action.payload)

      };

    case usersActionTypes.UPDATE:
      return {
        ...state,
        collection: replaceData(state.collection,action.payload)

      };




    default:
      return state;
  }
}

export default usersReducer;
