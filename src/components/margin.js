import React from "react";

export default function Margin({ width = "100%", height = "100%" }) {
  const style = {
    width: width || "100%",
    height: height || "100%",
  };

  return <div style={style} />;
}
