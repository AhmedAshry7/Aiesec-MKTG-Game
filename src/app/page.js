'use client'; // Needed for interactivity in app router

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Box from "./Box";
import image1 from "./assets/image1.png";
import island2 from "./assets/island2.png";
import coconut from "./assets/coconut.png";
import surfing from "./assets/surfing.png";
import element01 from "./assets/element01.png";
import Modal from "./Modal";
import huts from "./assets/huts.png"
import end from "./assets/beach.png";
import palm1 from "./assets/palm1.png";
import palm2 from "./assets/palm2.png";

export default function Home() {
  const questions = [
    { question: "You hang me and dance under me, what am I?", answer: "discoball", image:island2 },
    { question: "I have hands but no arms and a face but no eyes. What am I?", answer: "clock",image:coconut },
    { question: "The more you take, the more you leave behind. What am I?", answer: "footsteps" ,image:surfing},
    { question: "I speak without a mouth and hear without ears. What am I?", answer: "echo",image:huts },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal,setShowModal]=useState(true);
  const handleSubmit = (inputValue) => {
    const correctAnswer = questions[currentIndex].answer.toLowerCase().trim();
    if (inputValue.toLowerCase().trim() === correctAnswer) {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
      }
      if (currentIndex>2){
        setShowModal(false);
      }
    } else {
      // do nothing; Box will handle clearing input
    }
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
      <Modal invisible={showModal}/>
    </div>
  );
}
