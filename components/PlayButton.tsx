import React from 'react';
import styles from './PlayButton.module.css';
import Link from 'next/link';

const PlayButton: React.FC = () => {
  return (
    <Link href="/game">
      <button className={styles.button}>
        PLAY
      </button>
    </Link>
  );
};

export default PlayButton;
