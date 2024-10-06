import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
type Props = {
  message: string;
};
const CError = (props: Props) => {
  return (
    <span className="error-text">
      <FontAwesomeIcon icon={faTriangleExclamation} /> {props.message}
    </span>
  );
};

export default CError;
