import React, { Suspense } from "react";
import "./style.css";
export default (props) => {
  const { Component, route } = props;
  return (
    <div className="container">
        i'm auth layout
        <br></br>
      <Suspense fallback="...loading">
        <Component route={route} />
      </Suspense>
    </div>
  );
};
