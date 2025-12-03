import React from 'react';
import styles from './NextButton.module.css';

interface NextButtonProps {
  onClick: () => void;
  label: string;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, label }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClick}>
        {label} &rarr;
      </button>
    </div>
  );
};

export default NextButton;
