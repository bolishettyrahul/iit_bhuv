'use client';

import React from 'react';
import styles from './error.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.errorWrapper} role="alert">
      <h2 className={styles.errorTitle}>Pipeline Ingestion Error</h2>
      <p className={styles.errorText}>
        {error.message || 'The data mapping engine encountered a runtime exception.'}
      </p>
      <button className={styles.resetBtn} onClick={() => reset()}>
        Restart Engine
      </button>
    </div>
  );
}
