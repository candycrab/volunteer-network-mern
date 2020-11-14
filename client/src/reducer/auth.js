import { GET_USER, USER_ERROR, LOG_OUT } from "../action/type";

const initialState = {
   user: null,
   loading: true,
   isAuth: false,
};

export default (state = initialState, action) => {
   const { payload, type } = action;
   switch (type) {
      case GET_USER:
         return {
            ...state,
            user: { displayName: payload.name, email: payload.email },
            loading: false,
            isAuth: true,
         };
      case LOG_OUT:
         return {
            ...state,
            user: null,
            loading: false,
            isAuth: false,
         };
      case USER_ERROR:
         return {
            ...state,
            user: payload,
            isAuth: false,
         };
      default:
         return state;
   }
};
