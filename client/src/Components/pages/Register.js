import React, { useEffect, useState, useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// logo
import logo from "../../images/logo.png";

import { getSingleEvent } from "../../action/event";
import { registerVolunteer } from "../../action/volunteer";
import moment from "moment";

const Registration = ({
   auth: { user },
   event: { events, event },
   getSingleEvent,
   registerVolunteer,
   match,
   volunteer,
}) => {
   const [active, setActive] = useState({});
   const [redirect, setRedirect] = useState(false);
   useEffect(() => {
      if (events.length !== 0) {
         getSingleEvent(match.params.id);
      }
      setActive(
         volunteer &&
            volunteer.find(
               (vo) => vo.event && vo.event._id == match.params.id && vo
            )
      );
   }, [volunteer]);

   const [formData, setFormData] = useState({
      name: user && user.displayName,
      email: user && user.email,
   });

   const title = useRef(event && event.title);
   const description = useRef(event && event.description);
   const date = useRef(event && event.date);
   const { name, email } = formData;

   const onSubmit = (e) => {
      e.preventDefault();
      setFormData({
         name: user && user.displayName,
         email: user && user.email,
         description: event && event.description,
         date: event && event.date,
      });
      title.current = event && event.title;
      description.current = event && event.description;
      date.current = event && event.date;

      registerVolunteer(
         {
            name,
            email,
            description: description.current,
            date: date.current,
         },
         match.params.id
      );
      setRedirect(true);
   };

   if (redirect) {
      return <Redirect to="/events" />;
   }
   return (
      <div className="py-50 login text-center">
         <div className="container">
            <Link to="/" className="logo">
               <img src={logo} alt="Logo" />
            </Link>
            <div className="login-container w-40 p-relative p-36">
               <div className="login-content w-100 ">
                  <h1 className="heading text-left f-700 fs-24">
                     Register as a Volunteer
                  </h1>
                  <form
                     className="form text-left"
                     onSubmit={(e) => onSubmit(e)}
                  >
                     <div className="form-group mt-40">
                        <div className="form-item">
                           <input
                              className="w-100 py-10 f-500 fs-16 border-bottom"
                              type="text"
                              name="fullName"
                              placeholder="Full Name"
                              value={user ? user.displayName : ""}
                              disabled
                           />
                        </div>
                     </div>
                     <div className="form-group mt-40">
                        <div className="form-item">
                           <input
                              className="w-100 py-10 f-500 fs-16 border-bottom"
                              type="email"
                              name="email"
                              placeholder="Username or Email"
                              value={user ? user.email : ""}
                              disabled
                           />
                        </div>
                     </div>
                     <div className="form-group mt-40">
                        <div className="form-item">
                           <input
                              className="w-100 py-10 f-500 fs-16 border-bottom"
                              type="date"
                              name="date"
                              placeholder="Date"
                              value={
                                 event
                                    ? moment(event.date).format("YYYY-MM-DD")
                                    : ""
                              }
                              disabled
                           />
                        </div>
                     </div>
                     <div className="form-group mt-40">
                        <div className="form-item">
                           <input
                              className="w-100 py-10 f-500 fs-16 border-bottom"
                              type="text"
                              name="fullName"
                              placeholder="Description"
                              value={event ? event.description : ""}
                              disabled
                           />
                        </div>
                     </div>
                     <div className="form-group mt-40">
                        <div className="form-item">
                           <input
                              className="w-100 py-10 f-500 fs-16 border-bottom"
                              type="text"
                              name="fullName"
                              placeholder="Organize books at the library."
                              value={event ? event.title : ""}
                              disabled
                           />
                        </div>
                     </div>
                     <div className="form-group mt-40">
                        <div className="form-item">
                           {active ? (
                              <Link
                                 to="/events"
                                 className="f-500 p-12 bg-ff444a br-5 w-100 text-center fs-16"
                                 style={{
                                    textDecoration: "none",
                                    display: "block",
                                 }}
                              >
                                 You already resister for this event
                              </Link>
                           ) : (
                              <input
                                 type="submit"
                                 className="button d-block w-100 text-center p-12 f-500 fs-16 border-none bg-3f90fc"
                                 value="Registration"
                              />
                           )}
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

const mapstatetoprops = (state) => ({
   auth: state.auth,
   event: state.event,
   volunteer: state.volunteer.volunteer,
});

export default connect(mapstatetoprops, { getSingleEvent, registerVolunteer })(
   Registration
);
