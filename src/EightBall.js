import React, { useState } from 'react';
import './EightBall.css';

const EightBall = ({ answers }) => {
  const [greenCount, setGreenCount] = useState(0);
  const [goldenrodCount, setGoldenrodCount] = useState(0);
  const [redCount, setRedCount] = useState(0);
  const [answer, setAnswer] = useState({
    msg: 'Think of a Question',
    color: 'black',
  });

  const checkColor = () => {
    console.log(answer.color);
    if (answer.color === 'green') {
      setGreenCount(greenCount + 1);
    }
    if (answer.color === 'goldenrod') {
      setGoldenrodCount(goldenrodCount + 1);
    }
    if (answer.color === 'red') {
      setRedCount(redCount + 1);
    }
  };
  const getRandomAnswer = () => {
    const idx = Math.floor(Math.random() * answers.length);
    setAnswer(answers[idx]);
    checkColor();
  };
  const reset = () => {
    setAnswer({
      msg: 'Think of a Question',
      color: 'black',
    });
    setGreenCount(0);
    setRedCount(0);
    setGoldenrodCount(0);
  };
  return (
    <div className="EightBall">
      <div
        className="EightBall-Circle"
        style={{ backgroundColor: answer.color }}
      >
        <div className="EightBall-TextArea">
          <h1 className="EightBall-Text">{answer.msg}</h1>
        </div>
      </div>
      <button
        onClick={() => {
          getRandomAnswer();
        }}
        className="EightBall-Button"
      >
        Generate Answer
      </button>
      <button
        onClick={() => {
          reset();
        }}
        className="EightBall-Reset-Button"
      >
        Restart
      </button>
      <div>
        <h5 style={{ color: 'green' }}>Answers in Green: {greenCount}</h5>
        <h5 style={{ color: 'goldenrod' }}>
          Answers in Goldenrod: {goldenrodCount}
        </h5>
        <h5 style={{ color: 'red' }}>Answers in Red: {redCount}</h5>
      </div>
    </div>
  );
};

export default EightBall;
