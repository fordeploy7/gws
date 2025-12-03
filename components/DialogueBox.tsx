import React from 'react';
import styles from './DialogueBox.module.css';

interface DialogueBoxProps {
  text: string;
  buttonText: string;
  onNext: () => void;
}

const DialogueBox: React.FC<DialogueBoxProps> = ({ text, buttonText, onNext }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      <button className={styles.button} onClick={onNext}>
        {buttonText}
      </button>
    </div>
  );
};

export default DialogueBox;
