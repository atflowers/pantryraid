import React from "react";
require("./input.css");

export const Input = props =>
  <div className="form-group">
    <input className="form-control" {...props} />
  </div>;
