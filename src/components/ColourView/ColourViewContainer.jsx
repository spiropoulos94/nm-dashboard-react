import React, { useState, useEffect } from "react";
import fetchUrl from "../../utilities/fetchUrl.js";
import ColourView from "./ColourView.jsx";
import Spinner from "../Spinner/Spinner";

function ColourViewContainer({ url, setIsLoading, colours, setColours }) {
  let [_isLoading, _setIsLoading] = useState(colours===null);

  useEffect(() => {
    if (!colours) {
      fetchUrl(url).then((response) => {
        console.log("Colors endpoint request was made!");
        if (response.hasOwnProperty("data")) {
          setColours(response.data);
        }
      });
    }
    _setIsLoading(false);
    setIsLoading(_isLoading);
  }, []);

  if (_isLoading) return <Spinner />;

  return <ColourView data={colours} />;
}

export default ColourViewContainer;
