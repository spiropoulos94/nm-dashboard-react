import React from "react";
import Spinner from "../Spinner/Spinner";
import fetchUrl from "../../utilities/fetchFunction";



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
