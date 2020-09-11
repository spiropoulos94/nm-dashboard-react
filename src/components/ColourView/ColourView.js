import React, { useState, useEffect, Fragment } from "react";
import "./ColourView.scss";
import ColorCard from "./../ColourCard/ColourCard.js";


function ColourView(props) {
  
  let colorData = props.data

  return (
    <div>
      <div className="view-heading">
        <h2>Colours Screen</h2>{" "}
        <span>{colorData && `Items : ${colorData.length}`}</span>
      </div>
      <div className="color-grid">
        {colorData && colorData.map((color) => {
            return <ColorCard data={color} key={color.id} />;
          })}
      </div>
    </div>
  );
}

export default ColourView;
