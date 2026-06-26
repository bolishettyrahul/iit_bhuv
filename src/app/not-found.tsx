import React from 'react';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFoundWrapper}>
      <h2 className={styles.title}>404 — Pipeline Ingestion Node Not Found</h2>
      <p className={styles.text}>The requested configuration path could not be resolved by our routers.</p>
      <a href="/" className={styles.homeLink}>
        Back to Dashboard
      </a>
    </div>
  );
}
