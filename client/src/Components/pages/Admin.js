import React from "react";
import { Fragment } from "react";
import deleteImage from "../../images/delete.png";
import AdminNav from "../layouts/AdminNav";
import { connect } from "react-redux";
import moment from "moment";

import { deleteVolunteer } from "../../action/volunteer";

const Admin = ({ volunteers, deleteVolunteer }) => {
   return (
      <Fragment>
         <div className="admin">
            <AdminNav />
            <div className="admin-content pb-50">
               <table className="br-13 w-100 p-10 pb-50">
                  <thead>
                     <tr className="br-13 pt-18 pb-18 pl-33 pr-33">
                        <th className="w-20">Name</th>
                        <th className="w-30">Email ID</th>
                        <th className="w-15">Registating date</th>
                        <th className="w-29">Volunteer list</th>
                        <th className="w-6 text-right">Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     {volunteers &&
                        volunteers.map((volunteer, i) => (
                           <tr key={i} className=" pt-21  pl-33 pr-33">
                              <td className="w-20">
                                 {volunteer && volunteer.name}
                              </td>
                              <td className="w-30">
                                 {volunteer && volunteer.email}
                              </td>
                              <td className="w-15">
                                 {moment(volunteer && volunteer.date).format(
                                    "MM-DD-YYYY"
                                 )}
                              </td>
                              <td className="w-29">
                                 {volunteer &&
                                    volunteer.event &&
                                    volunteer.event.title}
                              </td>
                              <td className="w-6">
                                 <div
                                    className="image-container  bg-ff444a br-4 wpx-30 cursor-pointer"
                                    onClick={() =>
                                       deleteVolunteer(volunteer._id)
                                    }
                                 >
                                    <img src={deleteImage} alt="" />
                                 </div>
                              </td>
                           </tr>
                        ))}
                  </tbody>
               </table>
            </div>
         </div>
      </Fragment>
   );
};

const mapstatetoprops = (state) => ({
   volunteers: state.volunteer.volunteers,
});

export default connect(mapstatetoprops, { deleteVolunteer })(Admin);
