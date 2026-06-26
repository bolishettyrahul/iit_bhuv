import React from 'react';
import { contentConfig } from '../../config/content';
import { Container } from '../primitives/Container';
import { Badge } from '../primitives/Badge';
import { XMarkIcon, CubeIcon } from '../icons';
import styles from './Problem.module.css';

export const Problem: React.FC = () => {
  const { problem } = contentConfig;
  
  return (
    <section id="problem" className={styles.section} aria-labelledby="problem-title">
      <Container className={styles.container}>
        {/* Left Side: Pain Points details */}
        <div className={styles.textBlock}>
          <div className={styles.badgeWrapper}>
            <Badge>{problem.badge}</Badge>
          </div>
          <h2 id="problem-title" className={styles.title}>{problem.title}</h2>
          <p className={styles.description}>{problem.description}</p>
          
          <div className={styles.painList}>
            {problem.painPoints.map((point, idx) => (
              <div key={idx} className={styles.painItem}>
                <div className={styles.painIcon}>
                  <XMarkIcon />
                </div>
                <div className={styles.painContent}>
                  <h3 className={styles.painTitle}>{point.title}</h3>
                  <p className={styles.painDesc}>{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Broken Ingestion Trace Visual */}
        <div className={styles.visualBlock} aria-hidden="true">
          <div className={styles.failingCard}>
            <div className={styles.cardHeader}>
              <span className={styles.statusBadge}>● CRITICAL BREAKDOWN</span>
            </div>
            
            <div className={styles.visualFlow}>
              <div className={styles.node}>
                <CubeIcon className={styles.nodeIcon} />
                <span className={styles.nodeName}>Postgres</span>
              </div>
              
              <div className={styles.brokenConnector}>
                <div className={styles.line} />
                <XMarkIcon className={styles.errorIcon} />
              </div>
              
              <div className={`${styles.node} ${styles.failingNode}`}>
                <CubeIcon className={styles.nodeIcon} />
                <span className={styles.nodeName}>Snowflake</span>
              </div>
            </div>
            
            <div className={styles.consoleLog}>
              <code className={styles.logLine}>[ERROR] Ingestion process failed at 17:15:32</code>
              <code className={styles.logLine}>[ERROR] Cause: Schema mismatch on column 'user_tier'</code>
              <code className={styles.logLine}>[WARN] Pipeline connection closed. Retrying...</code>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Problem;
