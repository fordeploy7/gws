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
