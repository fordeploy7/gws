import React from 'react';
import Image from 'next/image';
import styles from './Character.module.css';

interface CharacterProps {
  imageSrc: string;
  altText: string;
}

const Character: React.FC<CharacterProps> = ({ imageSrc, altText }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={altText}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        ) : (
          <div className={styles.placeholder}>No Image</div>
        )}
      </div>
    </div>
  );
};

export default Character;
