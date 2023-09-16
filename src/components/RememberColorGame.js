import React, { useState, useEffect } from 'react';

const RememberColorGame = () => {
  const [colors, setColors] = useState([]);
  const [userColors, setUserColors] = useState([]);
  const [message, setMessage] = useState('Click "Start" to begin');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (isGameStarted && !isGameOver) {
      if (userColors.length === colors.length - 1) {
        const isCorrect = userColors.every(
          (userColor, index) => userColor === colors[index]
        );

        if (isCorrect) {
          setMessage('Congratulations! You remembered the colors!');
          setIsGameOver(true);
        } else {
          setMessage('Oops! Try again.');
          setIsGameOver(true);
        }
      }
    }
  }, [userColors, colors, isGameStarted, isGameOver]);

  const startGame = () => {
    const generatedColors = generateRandomColors(5); // Change the number of colors as needed
    setColors(generatedColors);
    setIsGameStarted(true);
    setIsGameOver(false);
    setUserColors([]);
    setMessage('Remember the colors!');

    setTimeout(() => {
      setMessage('Now, input the colors!');
    }, 3000); // Change the delay as needed
  };

  const generateRandomColors = (numColors) => {
    const randomColors = [];
    const allColors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange']; // Add more colors if desired

    for (let i = 0; i < numColors; i++) {
      const randomIndex = Math.floor(Math.random() * allColors.length);
      randomColors.push(allColors[randomIndex]);
    }

    return randomColors;
  };

  const handleColorClick = (color) => {
    if (isGameStarted && !isGameOver) {
      setUserColors([...userColors, color]);
    }
  };
  console.log(colors)
  console.log(userColors)

  return (
    <div>
      <h1>Remember the Color Game</h1>
      <p>{message}</p>
      <div className="color-container">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-box ${isGameStarted && !isGameOver && 'clickable'}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
      <button onClick={startGame} disabled={isGameStarted && !isGameOver}>
        Start
      </button>
    </div>
  );
};

export default RememberColorGame;
