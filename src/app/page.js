'use client'; // Needed for interactivity in app router

import { useState } from "react";
import Image from "next/image";

import Modal from "./Modal";
import FirstModal from "./FirstModal";
import Box from "./Box";

import styles from "./page.module.css";

import toast, { Toaster } from 'react-hot-toast';
import island2 from "./assets/island2.png";
import coconut from "./assets/coconut.png";
import surfing from "./assets/surfing.png";
import element01 from "./assets/element01.png";
import huts from "./assets/huts.png"
import end from "./assets/beach.png";
import palm1 from "./assets/palm1.png";
import palm2 from "./assets/palm2.png";

export default function Home() {
  const questions = [
    { question: "I stick to your toes, I’m warm and I’m fun. You’ll find me at beaches under the sun.What am I?", answer: "sand", image:island2 },
    { question: "I can lift your mood or make you cry, You hear me when the beats go by. On radios or when choirs sing, What am I?", answer: "songs",image:surfing },
    { question: "I sit on your nose, block out the glare, Protect your eyes with stylish flair.What am I?", answer: "sunglasses" ,image:coconut},
    { question: "Spiky outside, juicy inside, in smoothies and drinks, I love to hide. I’m sweet and yellow with a tropical bite, What fruit am I?", answer: "pineapple",image:huts },
    { question: "Lights like a disco ball, drums from a distant shore. I’m where coconuts fall, and we party more and more. What’s the vibe?", answer: "hawaiian disco",image:element01 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [hints, sethints] = useState(0);
  const [showCongratsModal, setShowCongratsModal] = useState(true);   // existing end-game modal
  const [playerName, setPlayerName] = useState("");
  const [showIntroModal, setShowIntroModal] = useState(true);
  const handleSubmit = (inputValue) => {
    const correctAnswer = questions[currentIndex].answer.toLowerCase().trim();
    if (inputValue.toLowerCase().trim() === correctAnswer) {
      setWrong(0);
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
      }
      if (currentIndex>3){
        setShowCongratsModal(false);
      }
    } else {
      if (wrong==0){
        toast.error('Oops! next time I will show the answer');;
      }else{
        toast.success(questions[currentIndex].answer);
        let hintst=hints+1;
        sethints(hintst);
      }
      let wrongt=wrong+1;
      setWrong(wrongt);
    }
  };

  const handleNameSubmit = (name) => {
    setPlayerName(name);
    setShowIntroModal(false);
  };

  return (
    <div className={styles.page}>
          <div className={styles.titleholder}>
              <div className={styles.title}>Aiesec in</div>
              <div className={styles.title}>Cairo University</div>
              <div className={styles.topholder}>
              <Image src={palm2} alt={"palm"} width={100}/>
              <Image src={palm1} alt={"palm"} width={100}/>
              </div>
              <div className={styles.welcome}>Welcome to the game</div>
            </div>

      
      {questions.map((q, index) => (
        <Box
          key={index}
          question={q.question}
          imageSrc={q.image}
          number={index + 1}
          invisible={index > currentIndex}
          onSubmit={handleSubmit}
        />
      ))}
      <Image className={styles.endImage} src={end} alt={"end"} />
      {showIntroModal && <FirstModal onSubmit={handleNameSubmit} />}
      <Modal invisible={showCongratsModal} name={playerName} hints={hints} />
      <Toaster />
    </div>
  );
}
