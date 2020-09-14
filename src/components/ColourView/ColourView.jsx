import React from "react";
import "./ColourView.scss";
import ColorCard from "../ColourCard/ColourCard.jsx";

function ColourView(props) {
  let colorData = props.data;

  if (!colorData) {
    colorData = [];
  }

  return (
    <div>
      <div className="view-heading">
        <h2>Colours Screen</h2> {/* tsekare type of data */}
        <span>{`Items : ${colorData.length}`}</span>
      </div>
      <div className="color-grid">
        {colorData.map((color) => {
          return <ColorCard data={color} key={color.id} />;
        })}
      </div>
    </div>
  );
}

export default ColourView;
