import React from "react";

function Container(props) {
  console.log(props.url);
  return <div style={{  }}>{props.children}</div>;
}

export default Container;
