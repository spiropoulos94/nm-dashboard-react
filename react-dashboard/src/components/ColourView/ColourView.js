import React, { useState, useEffect } from "react";
import "./colourview.scss";

function ColorCard(props) {
    let data = props.data
    console.log(data)
    
  return (
    <div className="color-card">
      <p className="color-code">{data.color}</p>
      <div className="color-info">
        <p className="color-year">{data.year}</p>
        <p className="color-name">{data.name}</p>
      </div>
    </div>
  );
}

function ColourView() {
  let [colorData, setColorData] = useState(null);
  let url = "https://reqres.in/api/products/";

  useEffect(() => {
    if (colorData == null) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setColorData(data.data));
    }
  }, [colorData]);

  return (
    <div className="color-wrapper">
      <div className="color-grid">
      {colorData &&
        colorData.map((color, index) => {
          return <ColorCard data={color} key={index} />;
        })}
    </div>
    </div>
  );
}

export default ColourView;
