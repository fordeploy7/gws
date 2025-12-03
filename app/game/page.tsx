import React from 'react';
import { Outfit } from 'next/font/google';
import LyricsGame from '@/components/LyricsGame';
import styles from '../page.module.css'; // Reuse main page styles for background

const outfit = Outfit({ subsets: ['latin'] });

export default function GamePage() {
  return (
    <main className={`${styles.main} ${outfit.className}`}>
      <LyricsGame />
    </main>
  );
}
