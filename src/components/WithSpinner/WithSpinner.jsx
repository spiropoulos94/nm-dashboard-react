import React from "react";
import Spinner from "../Spinner/Spinner";

function WithSpinner(Component) {
  return function WithSpinnerComponent({ isLoading, ...props }) {
    if (!isLoading) {
      console.log("props", props);
      return <Component {...props} />;
    }
    return <Spinner />;
  };
}

export default WithSpinner;
