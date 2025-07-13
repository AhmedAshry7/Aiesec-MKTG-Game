'use client';

import { useState } from 'react';
import styles from "./firstModal.module.css";

export default function FirstModal({ onSubmit }) {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('easy'); // default difficulty

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed) {
      onSubmit({ name: trimmed, difficulty }); // pass both name and difficulty
    }
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.card}>
        <h2 className={styles.title}>What’s your name?</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name…"
            autoFocus
          />

          <h4 className={styles.title2}>Show correct answer after?</h4>
          <select
            className={styles.select}
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy: 1 mistake</option>
            <option value="medium">Medium: 3 mistakes</option>
            <option value="hard">Hard: Never</option>
          </select>

          <button type="submit" className={styles.button}>
            Start
          </button>
        </form>
      </div>
    </div>
  );
}