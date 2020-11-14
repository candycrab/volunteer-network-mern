import {
   REGISTER_VOLUNTEER,
   GET_VOLUNTEER,
   VOLUNTEER,
   ERROR_VOLUNTEER,
   DELETE_VOLUNTEER,
} from "../action/type";

const initialState = {
   volunteers: [],
   volunteer: [],
};

export default (state = initialState, action) => {
   const { payload, type } = action;
   switch (type) {
      case GET_VOLUNTEER:
         return {
            ...state,
            volunteers: payload,
         };
      case REGISTER_VOLUNTEER:
         return {
            ...state,
            volunteers: [payload, ...state.volunteers],
            volunteer: [payload, ...state.volunteer],
         };
      case VOLUNTEER:
         return {
            ...state,
            volunteer: payload,
         };
      case ERROR_VOLUNTEER:
         return {
            ...state,
            volunteer: [],
            volunteers: [],
         };
      case DELETE_VOLUNTEER:
         return {
            ...state,
            volunteer: state.volunteer.filter((v) => v._id !== payload && v),
            volunteers: state.volunteers.filter((v) => v._id !== payload && v),
         };
      default:
         return state;
   }
};
