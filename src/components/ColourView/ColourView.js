import React, { useState, useEffect } from "react";
import "./ColourView.scss";
import ColorCard from "./../ColourCard/ColourCard.js";
import Spinner from "./../Spinner/Spinner.js";
import fetchUrl from "../../utilities/fetchFunction.js";

function ColourView(props) {
  let [colorData, setColorData] = useState(null);
  let [isLoading, setIsLoading] = useState(true)
  let url = "https://reqres.in/api/products/";

  useEffect(() => {
    if (colorData === null){ 
      {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let colours = data.data;
          setIsLoading(false)
          //test if the sort function works
          // colours[3].year = 2020
          colours.sort(function (a, b) {
            let keyA = a.year,
              keyB = b.year;
            // Compare the 2 dates
            if (keyA < keyB) return 1;
            if (keyA > keyB) return -1;
            return 0;
          });

          setColorData(colours);
        })
        .catch(err => {
          console.log(err)
          setIsLoading(true)
        });
        
    }}
  }, [colorData, url, props]);

  return (
    <>
    {isLoading ? <Spinner/> : <div>
      <div className="view-heading">
        <h2>Colours Screen</h2>{" "}
        <span>{colorData && `Items : ${colorData.length}`}</span>
      </div>
      <div className="color-grid">
        {colorData &&
          colorData.map((color) => {
            return <ColorCard data={color} key={color.id} />;
          })}
      </div>
    </div>}
    </>
  );
}

export default ColourView;
