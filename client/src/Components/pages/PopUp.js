import React from "react";
import moment from "moment";
import { connect } from "react-redux";

import { storage } from "../../config/firebase";

import { addEvent } from "../../action/event";

const PopUp = ({
   banner,
   title,
   description,
   submitData,
   onClick,
   file,
   addEvent,
   one,
}) => {
   const date = new Date();
   const math = Math.random();
   const onSubmit = () => {
      storage
         .ref()
         .child(`/images/${file.name + math}`)
         .put(file)
         .on("state_changed", async (snap) => {
            const banner = await storage
               .ref(`/images/${file.name + math}`)
               .getDownloadURL();
            if (!one) {
               addEvent({ banner, title, description, date });
               onClick();
               submitData();
            }
         });
   };

   return (
      <div className="popup position-relative">
         <div className="popup-container middle">
            <img src={banner} alt="" />
            <p className="title">
               <span className="f-500 mr-7 fs-18">Tittle :</span> {title}
            </p>
            <p className="my-10">
               <span className="f-500 mr-7 fs-18">Description :</span>
               {description}
            </p>
            <p className=" fs-16 date">
               <span className="f-500 mr-7 fs-18">Created At : </span>
               {moment(date).format("DD-MM-YY")}
            </p>
            <div className="flex">
               <button
                  onClick={() => onSubmit()}
                  className="br-5 p-15 f-500 fs-16 bg-3f90fc border-none wpx-100"
               >
                  Submit
               </button>
               <button
                  onClick={onClick}
                  className="br-5 p-15 f-500 ml-20 fs-16 bg-ff444a border-none wpx-100"
               >
                  Cancel
               </button>
            </div>
         </div>
      </div>
   );
};

export default connect(null, { addEvent })(PopUp);
