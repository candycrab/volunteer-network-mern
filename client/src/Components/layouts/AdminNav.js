import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import user from "../../images/user.png";
import add from "../../images/add.png";
import userActive from "../../images/userActive.png";
import addActive from "../../images/addActive.png";

const AdminNav = ({ addEvent }) => {
  const [activeHover, setActiveHover] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="admin-nav">
      <div className={`admin-nav-top ${toggle ? "open-nav" : ""}`}>
        <div
          className="admin-nav-responsive"
          onClick={() => setToggle(!toggle)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h2 className="f-500 fs-22">
          {addEvent ? "Add event" : "Volunteer register list"}
        </h2>
      </div>
      <div className={`admin-nav-left ${toggle ? "d-block" : ""}`}>
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>
        <ul>
          <li className={`f-400 fs-16 mt-49 ${addEvent ? "" : "active"}`}>
            <Link
              to="/admin"
              onMouseEnter={() => addEvent && setActiveHover(true)}
              onMouseLeave={() => addEvent && setActiveHover(false)}
            >
              <img
                src={!addEvent ? userActive : activeHover ? userActive : user}
                alt=""
                className="mr-10"
              />{" "}
              Volunteer register list
            </Link>
          </li>
          <li className={`f-400 fs-16 mt-30 ${addEvent ? "active" : ""}`}>
            <Link
              to="add-event"
              onMouseEnter={() => !addEvent && setActiveHover(true)}
              onMouseLeave={() => !addEvent && setActiveHover(false)}
            >
              <img
                src={addEvent ? addActive : activeHover ? addActive : add}
                className="mr-10"
                alt=""
              />{" "}
              Add event
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminNav;
