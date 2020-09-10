import React from "react";
import Spinner from "./../Spinner/Spinner";
import fetchUrl from "../../utilities/fetchFunction.js";

//TODO
//how to pass each component endpoint on fetchUrl in order
//for it to pass fetched data as props on wrapped components

function WithSpinner(Component) {
  return function WithSpinnerComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <Spinner />;
  };
}

export default WithSpinner;
