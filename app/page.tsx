'use client';

import React, { useState } from 'react';
import { Outfit } from 'next/font/google';
import Scene from '@/components/Scene';
import NextButton from '@/components/NextButton';
import { dialogueData } from '@/data/dialogue';
import PlayButton from '@/components/PlayButton';
import styles from './page.module.css';

const outfit = Outfit({ subsets: ['latin'] });

export default function Home() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [started, setStarted] = useState(false);

  const handleStart = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            await fetch('/api/save-location', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ latitude, longitude }),
            });
          } catch (error) {
            console.error("Failed to save location", error);
          } finally {
            setStarted(true);
          }
        },
        (error) => {
          console.error("Error getting location", error);
          setStarted(true);
        }
      );
    } else {
      setStarted(true);
    }
  };

  if (!started) {
    return (
      <main className={`${styles.main} ${outfit.className}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <h1 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Welcome</h1>
        <button 
          onClick={handleStart}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            backgroundColor: '#ff007f',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Enter
        </button>
      </main>
    );
  }

  const handleNext = () => {
    setCurrentStepIndex((prevIndex) => (prevIndex + 1) % dialogueData.length);
  };

  const currentStep = dialogueData[currentStepIndex];
  const isLastStep = currentStep.id === 6;

  return (
    <main className={`${styles.main} ${outfit.className}`}>
      <Scene
        dogImageSrc={currentStep.image}
        dialogueText={currentStep.text}
      />
      
      <NextButton onClick={handleNext} label={currentStep.buttonText} />
      
      {isLastStep && <PlayButton />}
    </main>
  );
}
