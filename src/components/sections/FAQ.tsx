'use client';

import React, { useState } from 'react';
import { contentConfig } from '../../config/content';
import { Container } from '../primitives/Container';
import { Badge } from '../primitives/Badge';
import { ChevronDownIcon } from '../icons';
import styles from './FAQ.module.css';

export const FAQ: React.FC = () => {
  const { faq } = contentConfig;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <Container>
        <div className={styles.headerBlock}>
          <div className={styles.badgeWrapper}>
            <Badge>{faq.badge}</Badge>
          </div>
          <h2 id="faq-title" className={styles.title}>{faq.title}</h2>
          <p className={styles.description}>{faq.description}</p>
        </div>

        <div className={styles.accordionWrap} role="region" aria-label="FAQ Accordion">
          {faq.items.map((item, idx) => {
            const isOpen = activeIndex === idx;
            
            return (
              <div key={idx} className={styles.accordionItem}>
                <button
                  className={`${styles.accordionHeader} ${isOpen ? styles.headerActive : ''}`}
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <ChevronDownIcon
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                  />
                </button>
                
                <div
                  id={`faq-panel-${idx}`}
                  className={`${styles.accordionPanel} ${isOpen ? styles.panelOpen : ''}`}
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <div className={styles.panelContent}>
                    <p className={styles.answerText}>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
