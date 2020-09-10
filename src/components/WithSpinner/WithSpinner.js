import React from "react";
import Spinner from "./../Spinner/Spinner";
import fetchUrl from "../../utilities/fetchFunction.js";

function WithSpinner(Component) {
  return function WithSpinnerComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <Spinner />;
  };
}

export default WithSpinner;
