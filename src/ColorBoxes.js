import React, { useState } from 'react';
import Box from './Box';
import CSS_COLOR_NAMES from './color-names';
import './ColorBoxes.css';

// Would refactor this significantly with more time

const ColorBoxes = () => {
  const getRandColor = () => {
    const idx = Math.floor(Math.random() * CSS_COLOR_NAMES.length);
    return CSS_COLOR_NAMES[idx];
  };
  const [box1Color, setBox1Color] = useState(getRandColor());
  const [box2Color, setBox2Color] = useState(getRandColor());
  const [box3Color, setBox3Color] = useState(getRandColor());
  const [box4Color, setBox4Color] = useState(getRandColor());
  const [box5Color, setBox5Color] = useState(getRandColor());
  const [box6Color, setBox6Color] = useState(getRandColor());
  const [box7Color, setBox7Color] = useState(getRandColor());
  const [box8Color, setBox8Color] = useState(getRandColor());
  const [box9Color, setBox9Color] = useState(getRandColor());
  const [box10Color, setBox10Color] = useState(getRandColor());
  const [box11Color, setBox11Color] = useState(getRandColor());
  const [box12Color, setBox12Color] = useState(getRandColor());
  const [box13Color, setBox13Color] = useState(getRandColor());
  const [box14Color, setBox14Color] = useState(getRandColor());
  const [box15Color, setBox15Color] = useState(getRandColor());
  const [box16Color, setBox16Color] = useState(getRandColor());
  const resetBoxes = () => {
    setBox1Color('white');
    setBox2Color('white');
    setBox3Color('white');
    setBox4Color('white');
    setBox5Color('white');
    setBox6Color('white');
    setBox7Color('white');
    setBox8Color('white');
    setBox9Color('white');
    setBox10Color('white');
    setBox11Color('white');
    setBox12Color('white');
    setBox13Color('white');
    setBox14Color('white');
    setBox15Color('white');
    setBox16Color('white');
  };

  const genRandNum = () => {
    return Math.floor(Math.random() * 16) + 1;
  };
  const changeRandBox = () => {
    const number = genRandNum();
    switch (number) {
      case 1:
        setBox1Color(getRandColor());
        break;
      case 2:
        setBox2Color(getRandColor());
        break;
      case 3:
        setBox3Color(getRandColor());
        break;
      case 4:
        setBox4Color(getRandColor());
        break;
      case 5:
        setBox5Color(getRandColor());
        break;
      case 6:
        setBox6Color(getRandColor());
        break;
      case 7:
        setBox7Color(getRandColor());
        break;
      case 8:
        setBox8Color(getRandColor());
        break;
      case 9:
        setBox9Color(getRandColor());
        break;
      case 10:
        setBox10Color(getRandColor());
        break;
      case 11:
        setBox11Color(getRandColor());
        break;
      case 12:
        setBox12Color(getRandColor());
        break;
      case 13:
        setBox13Color(getRandColor());
        break;
      case 14:
        setBox14Color(getRandColor());
        break;
      case 15:
        setBox15Color(getRandColor());
        break;
      case 16:
        setBox16Color(getRandColor());
        break;
    }
  };

  return (
    <div className="ColorBoxes">
      <div className="ColorBoxes-Container">
        <div className="container">
          <div className="row">
            <Box id="Box-1" color={box1Color} />
            <Box id="Box-2" color={box2Color} />
            <Box id="Box-3" color={box3Color} />
            <Box id="Box-4" color={box4Color} />
          </div>
          <div className="row">
            <Box id="Box-5" color={box5Color} />
            <Box id="Box-6" color={box6Color} />
            <Box id="Box-7" color={box7Color} />
            <Box id="Box-8" color={box8Color} />
          </div>
          <div className="row">
            <Box id="Box-9" color={box9Color} />
            <Box id="Box-10" color={box10Color} />
            <Box id="Box-11" color={box11Color} />
            <Box id="Box-12" color={box12Color} />
          </div>
          <div className="row">
            <Box id="Box-13" color={box13Color} />
            <Box id="Box-14" color={box14Color} />
            <Box id="Box-15" color={box15Color} />
            <Box id="Box-16" color={box16Color} />
          </div>
        </div>
      </div>
      <button
        className="ColorBoxes-Button btn btn-success"
        onClick={() => {
          changeRandBox();
        }}
      >
        Change Color of Random Box
      </button>
      <button
        className="ColorBoxes-Button btn btn-primary mx-2"
        onClick={() => {
          resetBoxes();
        }}
      >
        Reset Box Colors
      </button>
    </div>
  );
};

export default ColorBoxes;
