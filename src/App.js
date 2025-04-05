import React, { useState } from "react";
import "./App.css"; // Import the updated CSS

const ClockPuzzle = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [resultClass, setResultClass] = useState("");

  // Updated image paths
  const clockImages = [
    "/images/img1.png",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img4.png",
    "/images/img5.png",
    "/images/img6.png",
  ];

  const correctAnswer = "PYTHON"; // Correct word

  const checkAnswer = () => {
    if (userAnswer.trim().toUpperCase() === correctAnswer) {
      setResultMessage("✅ Correct Answer! Well done! 🎉");
      setResultClass("correct");
    } else {
      setResultMessage("❌ Wrong Answer! Try Again.");
      setResultClass("wrong");
    }
  };

  return (
    <div className="container">
      <h1>🕰️ Clock Puzzle Game</h1>

      {/* Rules Section */}
      <div className="rules">
        <h2>📜 How to Play:</h2>
        <ul>
          <li>Each clock represents a letter in a hidden word.</li>
          <li>Figure out the pattern and decode the correct word.</li>
          <li>Enter your answer in the text box below.</li>
          <li>Press <strong> Submit </strong> to check your answer.</li>
          <li><strong>Answer must be in CAPITAL LETTERS ONLY.</strong></li>
        </ul>
      </div>

      {/* Displaying the six clocks */}
      <div className="clock-container">
        {clockImages.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`Clock ${index + 1}`} className="clock-image" />
        ))}
      </div>

      {/* Input & Button */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your answer"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="input-box"
        />
        <button onClick={checkAnswer} className="submit-button">
          Submit
        </button>
      </div>

      {/* Result Message */}
      {resultMessage && <p className={`result-message ${resultClass}`}>{resultMessage}</p>}
    </div>
  );
};

export default ClockPuzzle;
