import React from "react";
import "./Loader.scss";

interface LoaderProps {
  loading: boolean;
}

const Loader = (props: LoaderProps) => {
  return (
    <>
      {props.loading ? (
        <div className="ue-loader">
          <img src="http://localhost:7070/logo.png" alt="" />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loader;
