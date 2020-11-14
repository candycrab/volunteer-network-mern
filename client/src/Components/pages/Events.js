import React, { Fragment } from "react";

import Navbar from "../layouts/Navbar";
import { connect } from "react-redux";

import moment from "moment";

import { deleteVolunteer } from "../../action/volunteer";

const Events = ({ volunteer, deleteVolunteer }) => {
   return (
      <Fragment>
         <Navbar />
         <div className="event py-30 pt-150">
            <div className="container">
               {volunteer.length > 0 ? (
                  <div className="event-container">
                     {volunteer.map((volunteer, i) => (
                        <div className="event-single p-24 br-10" key={i}>
                           <img
                              src={volunteer.event && volunteer.event.banner}
                              alt={volunteer.event && volunteer.event.title}
                           />
                           <div className="event-content w-100 ml-23 p-relative">
                              <h2 className="f-900 fs-24 ">
                                 {volunteer.event && volunteer.event.title}
                              </h2>
                              <p className="f-500 mt-10">
                                 {moment(
                                    volunteer.event && volunteer.event.date
                                 ).format("ll")}
                              </p>
                              <p
                                 onClick={() => deleteVolunteer(volunteer._id)}
                                 className="pt-13 pb-13 pl-41 pr-41 text-center br-5 bg-e3e3e3 cursor-pointer wpx-131  p-absolute bpx-0 rpx-0 "
                              >
                                 Cancel
                              </p>
                           </div>
                        </div>
                     ))}
                  </div>
               ) : (
                  <h2
                     className="text-center w-100 fs-50 py-50"
                     style={{ display: "block" }}
                  >
                     Event not found
                  </h2>
               )}
            </div>
         </div>
      </Fragment>
   );
};

const mapstatetoprops = (state) => ({
   volunteer: state.volunteer.volunteer,
});

export default connect(mapstatetoprops, { deleteVolunteer })(Events);
