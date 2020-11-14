import Axios from "axios";
import {
   REGISTER_VOLUNTEER,
   GET_VOLUNTEER,
   VOLUNTEER,
   ERROR_VOLUNTEER,
   DELETE_VOLUNTEER,
} from "./type";

const config = {
   headers: {
      "Content-Type": "application/json",
   },
};

export const getVolunteer = () => async (dispatch) => {
   try {
      const res = await Axios.get("/volunteer");
      dispatch({
         type: GET_VOLUNTEER,
         payload: res.data,
      });
   } catch (err) {
      console.log(err.message);
   }
};

export const registerVolunteer = (data, id) => async (dispatch) => {
   try {
      const body = JSON.stringify(data);
      const res = await Axios.post(`/volunteer/${id}`, body, config);
      dispatch({
         type: REGISTER_VOLUNTEER,
         payload: res.data,
      });
   } catch (err) {
      console.log(err.message);
   }
};

export const getSingleVolunteer = (email) => async (dispatch) => {
   try {
      const res = await Axios.get(`/volunteer/${email}`);
      dispatch({
         type: VOLUNTEER,
         payload: res.data,
      });
   } catch (err) {
      dispatch({
         type: ERROR_VOLUNTEER,
      });
   }
};

export const deleteVolunteer = (id) => async (dispatch) => {
   console.log(id);
   try {
      await Axios.delete(`/volunteer/${id}`);
      dispatch({
         type: DELETE_VOLUNTEER,
         payload: id,
      });
   } catch (err) {
      console.log(err.message);
   }
};
