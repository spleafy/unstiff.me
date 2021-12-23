import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>
        Sorry, we couldn't find the page you are looking for!
        <Link to="/">
          <span style={{ marginLeft: "20px", fontSize: "22pt" }}>
            Go back to the home page!
          </span>
        </Link>
      </h1>
    </div>
  );
};

export default NotFoundPage;
