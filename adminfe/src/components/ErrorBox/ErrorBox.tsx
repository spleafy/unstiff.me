import React from "react";
import { FiInfo } from "react-icons/fi";
import { useState } from "react";

interface ErrorProps {
  message: string;
}

const ErrorBox = (props: ErrorProps) => {
  const [render, setRender] = useState(true);

  setTimeout(() => {
    setRender(false);
  }, 2000);

  return render ? (
    <div className="ue-error-box">
      <FiInfo color="#fff" />
      {props.message}
    </div>
  ) : (
    <></>
  );
};

export default ErrorBox;
