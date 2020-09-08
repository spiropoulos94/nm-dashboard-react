import React, { useState, useEffect } from "react";
import "./colourview.scss";

function ColorCard(props) {
  let data = props.data;

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

function ColourView() {
  let [colorData, setColorData] = useState(null);
  let url = "colors.json";

  useEffect(() => {
    if (colorData == null) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setColorData(data.data));
    }
  }, [colorData, url]);

  return (
    <div>
      <div className="view-heading">
        <h2>Colours Screen</h2> <span>{colorData && `Items : ${colorData.length}`}</span>
      </div>
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
