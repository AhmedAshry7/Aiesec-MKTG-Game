import React from 'react';
import Image from "next/image";
import './box.css';

function Box  ({ question, imageSrc, number, invisible, imageAlt = "Illustration" }) {
  return (
    <div className={invisible?"invible-container":number%2?"question-input-container-1":"question-input-container-2"}>
      <div className="image-container">
        <Image src={imageSrc} alt={imageAlt} height={16} width={16} />
      </div>
      <div className="content-container">
        <p className="question-text">{question}</p>
        <div className="input-group">
          <input
            type="text"
            className="answer-input"
            placeholder="Type your answer"
          />
          <button className="submit-button">Submit</button>
        </div>

      </div>
    </div>
  );
};

export default Box ;