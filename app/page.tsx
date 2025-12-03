'use client';

import React, { useState } from 'react';
import { Outfit } from 'next/font/google';
import Scene from '@/components/Scene';
import NextButton from '@/components/NextButton';
import { dialogueData } from '@/data/dialogue';
import styles from './page.module.css';

const outfit = Outfit({ subsets: ['latin'] });

export default function Home() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const currentStep = dialogueData[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < dialogueData.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      // Loop back to start
      setCurrentStepIndex(0);
    }
  };

  return (
    <main className={`${outfit.className} ${styles.main}`}>
      <Scene
        dogImageSrc={currentStep.image}
        dialogueText={currentStep.text}
      />
      <NextButton
        label={currentStep.buttonText}
        onClick={handleNext}
      />
    </main>
  );
}
