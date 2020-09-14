import React, { useState, useEffect } from "react";
import fetchUrl from "../../utilities/fetchUrl.js";
import ColourView from "./ColourView.jsx";
import Spinner from "../Spinner/Spinner";

function ColourViewContainer({ url, setIsLoading, isLoading }) {
  let [data, setData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchUrl(url).then((response) => {
      if (response.data) {
        setData(response.data);
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) return <Spinner />;

  return <ColourView data={data} />;
}

export default ColourViewContainer;
