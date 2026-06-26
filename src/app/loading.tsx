import React from 'react';
import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingWrapper} aria-busy="true" aria-label="Loading application">
      <div className={styles.spinner} />
      <span className={styles.loadingText}>Initializing DataFlow Pipeline Engine...</span>
    </div>
  );
}
