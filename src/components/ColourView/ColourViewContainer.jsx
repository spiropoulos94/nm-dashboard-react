import React, { useState, useEffect } from "react";
import fetchUrl from "../../utilities/fetchUrl.js";
import ColourView from "./ColourView.jsx";
import Spinner from "../Spinner/Spinner";

function ColourViewContainer({ url, setIsLoading, colours, setColours }) {
  let [_isLoading, _setIsLoading] = useState(true);

  useEffect(() => {
    if (colours) {
      setColours(colours);
    } else {
      fetchUrl(url).then((response) => {
        console.log("Colors endpoint request was made!");
        //edw tsekare ta data, kane ta normalize
        if (response.hasOwnProperty("data")) {
          setColours(response.data);
        }
      });
    }
    // console.log(colours)
    if(colours){
      _setIsLoading(false)
    }
    //added colours in dependency array because on mount the colours is null
    //but after the useEffect it has a value.
  }, [colours]);

  if (_isLoading) return <Spinner />;

  return <ColourView data={colours} />;
}

export default ColourViewContainer;
