import React, { useState, useEffect } from "react";
import fetchUrl from "../../utilities/fetchUrl";
import ColourView from "./ColourView";
import Spinner from "../Spinner/Spinner";

function ColourViewContainer({ url, setIsLoading, colours, setColours }) {
  let [_isLoading, _setIsLoading] = useState(colours===null);

  function updateStateOnFetch(response) {
    const _data = response && response.hasOwnProperty('data') && response['data'] || [];
    setColours(_data);
    _setIsLoading(false);
    setIsLoading(false);
  }

  useEffect(() => {
    if (!colours) {
      fetchUrl(url).then((response) => {
        console.log("Colors endpoint request was made!");
        updateStateOnFetch(response); 
      });
    }
  }, []);

  if (_isLoading) return <Spinner />;

  return <ColourView data={colours} />;
  // return <Spinner/>
}

export default ColourViewContainer;
