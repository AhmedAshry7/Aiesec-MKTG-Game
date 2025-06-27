'use client';

import { useState } from 'react';
import styles from "./firstModal.module.css";

export default function FirstModal({ onSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed) {
      onSubmit(trimmed);          // send the name up
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
          <button type="submit" className={styles.button}>
            Start
          </button>
        </form>
      </div>
    </div>
  );
}
