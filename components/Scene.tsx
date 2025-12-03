import React from 'react';
import Image from 'next/image';
import styles from './Scene.module.css';

interface SceneProps {
  dogImageSrc: string;
  dialogueText: string;
}

const Scene: React.FC<SceneProps> = ({ dogImageSrc, dialogueText }) => {
  const isLongText = dialogueText.length > 17;

  return (
    <div className={styles.container}>
      {/* Thought Bubble */}
      <div className={isLongText ? styles.bubbleWrapperLarge : styles.bubbleWrapper}>
        <Image
          src="/images/cloud_final.png"
          alt="Thought Bubble"
          fill
          className={styles.bubbleImage}
          style={{ objectFit: 'contain' }}
        />
        <div className={isLongText ? styles.textOverlaySmall : styles.textOverlay}>
          {dialogueText}
        </div>
      </div>

      {/* Dog Image */}
      <div className={styles.dogWrapper}>
        <Image
          src={dogImageSrc}
          alt="Shih Tzu"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  );
};

export default Scene;
