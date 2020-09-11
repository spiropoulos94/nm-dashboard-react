import React, { useState, useEffect } from "react";
import fetchUrl from "../../utilities/fetchFunction.js";
import ColourView from "./ColourView.js";
import Spinner from "./../Spinner/Spinner";

function ColourContainer({ url, setIsLoading, isLoading }) {
  
  let [data, setData] = useState(null);
  
  useEffect(() => {
    //do we need the spinner to display always before rendering View???
    setIsLoading(true)
    fetchUrl(url).then((response) => {
      if(response.data){
        setData(response.data);
      setIsLoading(false);
      }
      
    })
    
  }, []);

  if (isLoading) return <Spinner />;

  return <ColourView data={data} />;
}

export default ColourContainer;
