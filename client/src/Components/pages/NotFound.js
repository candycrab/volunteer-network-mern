import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="middle text-center">
      <h1 className="fs-50 mb-30" style={{ textTransform: "uppercase" }}>
        Page not found
      </h1>
      <Link
        to="/"
        style={{ textDecoration: "none", display: "block" }}
        className="text-center fs-20 f-500 w-100 bg-ff444a p-10 br-5"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
