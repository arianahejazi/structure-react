import React, { Suspense } from "react";

export default (props) => {
  const { Component, route } = props;
  return (
    <Suspense fallback="...loading">
      <Component route={route} />
    </Suspense>
  );
};
