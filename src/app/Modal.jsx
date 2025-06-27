import React, { useState, useEffect } from 'react';
import Image from "next/image";
import './box.css';
import correct from "./assets/correct.png"
function Modal({ invisible, name }) {
  const [isVisible, setIsVisible] = useState(!invisible);

  useEffect(() => {
    setIsVisible(!invisible);
  }, [invisible]);


  if (!isVisible) return null;

  return (
    <div className={"modal"}>
      <div className="modal-content-container">
        <div className={"text-container"}>
            <p className="text">IMPRESSSIVE</p>
            <p className="text">{name}</p>  
        </div>
        <div className="image-container">
          <Image src={correct} alt={"congratulations"} height={64} width={64} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
