import React from "react";
import "./ColourView.scss";
import ColorCard from "../ColourCard/ColourCard.jsx";

function ColourView({data}) {

  if (!data && (!Array.isArray(data))) {
    data = [];
  }

  return (
    <div className="view-wrapper">
      <div className="view-heading">
        <h2>Colours Screen</h2>
        <span>{`Items : ${data.length}`}</span>
      </div>
      <div className="color-grid">
        {data.map((color) => {
          return <ColorCard data={color} key={color.id} />;
        })}
      </div>
    </div>
  );
}

export default ColourView;
