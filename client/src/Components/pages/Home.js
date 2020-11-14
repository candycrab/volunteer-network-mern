import React, { Fragment, useRef } from "react";
import Card from "./Card";
import Navbar from "../layouts/Navbar";
import { connect } from "react-redux";

import { searchEvents } from "../../action/event";

const Home = ({ events, searchEvents }) => {
   const search = useRef("");
   const onChange = (e) => {
      search.current = e.target.value;
   };
   return (
      <Fragment>
         <Navbar />
         <div className="home">
            <div className="banner">
               <div className="banner-overlay">
                  <div className="container pt-173 pb-203">
                     <h1 className="text-center f-700 fs-34">
                        I grow by helping people in need.
                     </h1>
                     <form
                        action=""
                        className="form text-center mt-26"
                        onSubmit={(e) => {
                           e.preventDefault();
                           searchEvents(search.current);
                        }}
                     >
                        <div className="form-group">
                           <div className="form-item">
                              <input
                                 type="text"
                                 className="p-15 w-33 fs-16 f-500"
                                 placeholder="Search...."
                                 ref={search}
                                 onChange={onChange}
                              />
                              <input
                                 type="submit"
                                 className="p-15 w-10 fs-16 f-500 bg-3f90fc"
                                 value="Search"
                              />
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <div className="container">
               {events.length !== 0 ? (
                  <div className="card-container pb-50">
                     {events &&
                        events.map((event) => (
                           <Card key={event._id} event={event} />
                        ))}
                  </div>
               ) : (
                  <h2 className="text-center fs-50 py-50">Event not found</h2>
               )}
            </div>
         </div>
      </Fragment>
   );
};

const mapstatetoprops = (state) => ({
   events: state.event.events,
});

export default connect(mapstatetoprops, { searchEvents })(Home);
