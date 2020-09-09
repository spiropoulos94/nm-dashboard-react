import React, { useState, useEffect } from "react";
import "./colourview.scss";

function ColorCard(props) {
  let data = props.data;
  let url = "https://reqres.in/api/products/";
  return (
    <div className="color-card" style={{ background: `${data.color}` }}>
      <p className="color-code">{data.color}</p>
      <div className="color-info">
        <p className="color-year">{data.year}</p>
        <p className="color-name">{data.name}</p>
      </div>
    </div>
  );
}

function ColourView(props) {
  let [colorData, setColorData] = useState(null);
  let url = "https://reqres.in/api/products/";

  useEffect(() => {
    if (colorData === null) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let colours = data.data;
          props.updateLoadingStatus(false);

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
        });
    }
  }, [colorData, url]);

  return (
    <div>
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
    </div>
  );
}

export default ColourView;
