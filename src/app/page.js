'use client'; // Needed for interactivity in app router

import { useState } from "react";
import styles from "./page.module.css";
import Box from "./Box";
import image1 from "./assets/image1.jpeg";

export default function Home() {
  const questions = [
    { question: "You hang me and dance under me, what am I?", answer: "discoball" },
    { question: "I have hands but no arms and a face but no eyes. What am I?", answer: "clock" },
    { question: "The more you take, the more you leave behind. What am I?", answer: "footsteps" },
    { question: "I speak without a mouth and hear without ears. What am I?", answer: "echo" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSubmit = (inputValue) => {
    const correctAnswer = questions[currentIndex].answer.toLowerCase().trim();
    if (inputValue.toLowerCase().trim() === correctAnswer) {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
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
        <div className={styles.welcome}>Welcome to the game</div>
      </div>

      {questions.map((q, index) => (
        <Box
          key={index}
          question={q.question}
          imageSrc={image1}
          number={index + 1}
          invisible={index > currentIndex}
          onSubmit={handleSubmit}
        />
      ))}
    </div>
  );
}
