import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <div>404</div>
      <div>This page doesn't exist</div>
      <div>
        <Link to="/">
          <button className="goHomeBtn">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
