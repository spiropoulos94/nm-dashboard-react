import React, { useState, useEffect, Fragment } from "react";
import "./ColourView.scss";
import ColorCard from "./../ColourCard/ColourCard.js";
import Spinner from "./../Spinner/Spinner.js";
import fetchUrl from "../../utilities/fetchFunction.js";

function ColourView() {
  let [colorData, setColorData] = useState(null);
  let [isLoading, setIsLoading] = useState(true)
  let url = "https://reqres.in/api/products/";

  useEffect(() => {
    if (colorData === null) {
      fetchUrl(url)
      .then(responseObj => {
        if(responseObj){
          setIsLoading(false)
          setColorData(responseObj.data)
        }  
      })
  }
  }, []);

  return (
    <Fragment>
    {isLoading ? <Spinner/> : <div>
      <div className="view-heading">
        <h2>Colours Screen</h2>{" "}
        <span>{colorData && `Items : ${colorData.length}`}</span>
      </div>
      <div className="color-grid">
        {colorData && colorData.map((color) => {
            return <ColorCard data={color} key={color.id} />;
          })}
      </div>
    </div>}
    </Fragment>
  );
}

export default ColourView;
