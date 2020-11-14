import Axios from "axios";
import { ADD_EVENT, GET_EVENT, GET_SINGLE, DELETE_EVENT } from "./type";

import { storage } from "../config/firebase";

const config = {
   headers: {
      "Content-Type": "application/json",
   },
};

export const addEvent = (data) => async (dispatch) => {
   try {
      const res = await Axios.post(`/event`, JSON.stringify(data), config);
      dispatch({
         type: ADD_EVENT,
         payload: res.data,
      });
   } catch (err) {
      console.log(err.message);
   }
};

export const searchEvents = (data) => async (dispatch) => {
   try {
      const res = await Axios.get(`/event/${data}`);
      dispatch({
         type: GET_EVENT,
         payload: res.data,
      });
   } catch (err) {
      console.log(err.message);
   }
};

export const getEvent = () => async (dispatch) => {
   try {
      const res = await Axios.get("/event");
      dispatch({
         type: GET_EVENT,
         payload: res.data,
      });
   } catch (err) {
      console.log(err.message);
   }
};

export const getSingleEvent = (data) => (dispatch) => {
   dispatch({
      type: GET_SINGLE,
      payload: data,
   });
};

export const deleteEvent = (id, image) => (dispatch) => {
   try {
      // Create a reference to the file to delete
      var desertRef = storage.refFromURL(image);
      desertRef
         .delete()
         .then(async () => {
            await Axios.delete(`/event/${id}`);
            console.log("deleted");
            dispatch({
               type: DELETE_EVENT,
               payload: id,
            });
         })
         .catch((err) => {
            console.log(err);
         });
   } catch (err) {
      console.log(err.message);
   }
};
