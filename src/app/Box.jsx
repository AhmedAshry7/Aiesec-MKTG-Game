import React, { useState, useEffect } from 'react';
import Image from "next/image";
import './box.css';

function Box({ question, imageSrc, number, invisible, imageAlt = "Illustration", onSubmit }) {
  const [input, setInput] = useState('');
  const [isVisible, setIsVisible] = useState(!invisible);

  useEffect(() => {
    setIsVisible(!invisible);
    setInput('');
  }, [invisible]);

  const handleSubmit = () => {
    if (input.trim() === '') return;

    const prevInput = input;
    onSubmit(prevInput);

    // Reset only if answer is wrong
    // The parent will control visibility if it's correct
    setInput('');
  };

  if (!isVisible) return null;

  return (
    <div className={number % 2 ? "question-input-container-1" : "question-input-container-2"}>
      <div className="image-container">
        <Image src={imageSrc} alt={imageAlt} height={64} width={64} />
      </div>
      <div className="content-container">
        <p className="question-text">{question}</p>
        <div className="input-group">
          <input
            type="text"
            className="answer-input"
            placeholder="Type your answer"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Box;
