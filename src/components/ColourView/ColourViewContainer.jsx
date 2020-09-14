import React, { useState, useEffect } from "react";
import fetchUrl from "../../utilities/fetchUrl.js";
import ColourView from "./ColourView.jsx";
import Spinner from "../Spinner/Spinner";

function ColourViewContainer({ url, setIsLoading }) {
  let [data, setData] = useState(null);
  let [_isLoading, _setIsLoading] = useState(true)

  useEffect(() => {
    //todo vevaiwsou oti to response exei mesa ena prop. data kai an einai gemato h adeio(den mas afora edw)
    fetchUrl(url).then((response) => {
      if (response.data) {
        setData(response.data);
        _setIsLoading(false);
      }
    });
  }, []);

  if (_isLoading) return <Spinner />;

  return <ColourView data={data} />;
}

export default ColourViewContainer;
