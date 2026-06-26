'use client';

import React, { useState, useEffect } from 'react';
import { contentConfig } from '../../config/content';
import { Container } from '../primitives/Container';
import { Badge } from '../primitives/Badge';
import styles from './Solution.module.css';

export const Solution: React.FC = () => {
  const { solution } = contentConfig;
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (isPaused) {
      setProgress(100);
      return;
    }

    const duration = 3500; // cycle every 3.5 seconds
    const intervalTime = 30; // update progress every 30ms
    const stepIncrement = (100 / (duration / intervalTime));

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((current) => (current + 1) % solution.steps.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, solution.steps.length]);

  return (
    <section id="solution" className={styles.section} aria-labelledby="solution-title">
      <Container>
        <div className={styles.headerBlock}>
          <div className={styles.badgeWrapper}>
            <Badge>{solution.badge}</Badge>
          </div>
          <h2 id="solution-title" className={styles.title}>{solution.title}</h2>
          <p className={styles.description}>{solution.description}</p>
        </div>
        
        {/* Animated Timeline Grid Flow */}
        <div className={styles.timelineGrid}>
          {solution.steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                className={`${styles.stepItem} ${isActive ? styles.activeStepItem : ''}`}
                onMouseEnter={() => {
                  setActiveStep(idx);
                  setIsPaused(true);
                }}
                onMouseLeave={() => setIsPaused(false)}
              >
                {isActive && (
                  <div
                    className={styles.progressBar}
                    style={{ width: `${progress}%` }}
                  />
                )}
                <div className={styles.stepHeader}>
                  <span className={`${styles.stepNumber} ${isActive ? styles.activeNumber : ''}`}>
                    {step.number}
                  </span>
                  {idx < solution.steps.length - 1 && (
                    <div 
                      className={`${styles.stepLine} ${isActive ? styles.activeLine : ''}`} 
                      aria-hidden="true" 
                    />
                  )}
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Solution;
