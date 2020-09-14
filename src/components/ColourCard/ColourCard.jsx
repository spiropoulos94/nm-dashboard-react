import React from "react";
import "./ColourCard.scss";

function ColorCard(props) {
  let { data } = props;

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

export default ColorCard;
