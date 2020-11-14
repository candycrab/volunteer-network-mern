import { GET_USER, USER_ERROR, LOG_OUT, ERROR_VOLUNTEER } from "./type";

import { getSingleVolunteer } from "./volunteer";

export const getUser = (res) => async (dispatch) => {
   if (res) {
      dispatch({
         type: GET_USER,
         payload: res,
      });
      dispatch(getSingleVolunteer(res.email));
   } else {
      dispatch({
         type: USER_ERROR,
      });
      dispatch({
         type: ERROR_VOLUNTEER,
      });
   }
};

export const googleLogin = (res) => async (dispatch) => {
   try {
      dispatch(getUser(res));
   } catch (err) {
      console.log(err.message);
   }
};

export const logOut = () => async (dispatch) => {
   dispatch({
      type: LOG_OUT,
   });
};
