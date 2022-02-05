import React from "react";
type validate = {
  message: string;
  validation: boolean;
};
const Validation: React.FC<validate> = ({ message, validation }) => {
  return <div>{validation && <p className="text-cancel">{message}</p>}</div>;
};

export default Validation;
