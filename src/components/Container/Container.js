import React from "react";

function Container(props) {
  console.log(props.url);
  return <div style={{ color: "red" }}>{props.children}</div>;
}

export default Container;
