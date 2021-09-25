import React, { useState } from 'react';
import './Box.css';
import CSS_COLOR_NAMES from './color-names';

const Box = ({ color }) => {
  return (
    <div
      className="Box col-3 text-primary"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default Box;
