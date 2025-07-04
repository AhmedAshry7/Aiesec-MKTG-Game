import React, { useState, useEffect } from 'react';
import Image from "next/image";
import './box.css';
import correct from "./assets/correct.png"
function Modal({ invisible, name, hints, difficulty }) {
  const [isVisible, setIsVisible] = useState(!invisible);

  useEffect(() => {
    setIsVisible(!invisible);
  }, [invisible]);


  if (!isVisible) return null;

  return (
    <div className={"modal"}>
      <div className="text-container">
        <p className="text">{name}</p> 
      </div>
      <div className="hint-container">
        <p className="hint">Difficulty: {difficulty}</p> 
        <p className="hint">You used {hints} hints.</p> 
      </div>
    </div>
  );
}

export default Modal;
