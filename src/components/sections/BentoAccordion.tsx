'use client';

import React, { useState } from 'react';
import { contentConfig } from '../../config/content';
import { Container } from '../primitives/Container';
import { Badge } from '../primitives/Badge';
import { Card } from '../primitives/Card';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { CubeIcon, CogIcon, ChartPieIcon, LinkSolidIcon, ChevronDownIcon } from '../icons';
import styles from './BentoAccordion.module.css';

export const BentoAccordion: React.FC = () => {
  const { bento } = contentConfig;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  // Detect layout mode: width >= 768px is desktop bento grid
  const isDesktop = useMediaQuery('(min-width: 768px)');
  
  const getIcon = (id: string) => {
    switch (id) {
      case 'orchestration': return CogIcon;
      case 'security': return LinkSolidIcon;
      case 'observability': return ChartPieIcon;
      case 'scale': return CubeIcon;
      default: return CubeIcon;
    }
  };

  return (
    <section id="capabilities" className={styles.section} aria-labelledby="bento-title">
      <Container>
        <div className={styles.headerBlock}>
          <div className={styles.badgeWrapper}>
            <Badge>{bento.badge}</Badge>
          </div>
          <h2 id="bento-title" className={styles.title}>{bento.title}</h2>
          <p className={styles.description}>{bento.description}</p>
        </div>

        {isDesktop ? (
          /* Desktop layout - Bento Grid */
          <div className={styles.bentoGrid}>
            {bento.cells.map((cell, idx) => {
              const IconComponent = getIcon(cell.id);
              const isCellActive = activeIndex === idx;
              const gridSpanClass = cell.size === 'large' ? styles.span8 : styles.span4;
              
              return (
                <Card
                  key={cell.id}
                  variant="bento"
                  highlighted={isCellActive}
                  className={`${styles.bentoCard} ${gridSpanClass}`}
                  onMouseEnter={() => setActiveIndex(idx)}
                >
                  <div className={styles.bentoCardContent}>
                    <div className={styles.bentoHeader}>
                      <div className={styles.bentoIconWrap}>
                        <IconComponent />
                      </div>
                      <span className={styles.bentoMetric}>{cell.metric}</span>
                    </div>
                    <h3 className={styles.bentoCardTitle}>{cell.title}</h3>
                    <p className={styles.bentoCardDesc}>{cell.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          /* Mobile layout - Accordion */
          <div className={styles.accordionWrap} role="region" aria-label="Capabilities Accordion">
            {bento.cells.map((cell, idx) => {
              const IconComponent = getIcon(cell.id);
              const isOpen = activeIndex === idx;
              
              return (
                <div key={cell.id} className={styles.accordionItem}>
                  <button
                    className={`${styles.accordionHeader} ${isOpen ? styles.headerActive : ''}`}
                    onClick={() => setActiveIndex(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`bento-panel-${cell.id}`}
                  >
                    <div className={styles.headerTitleWrap}>
                      <IconComponent className={styles.accordionIcon} />
                      <span className={styles.accordionTitleText}>{cell.title}</span>
                    </div>
                    <ChevronDownIcon
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                    />
                  </button>
                  
                  <div
                    id={`bento-panel-${cell.id}`}
                    className={`${styles.accordionPanel} ${isOpen ? styles.panelOpen : ''}`}
                    role="region"
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.panelContent}>
                      <p className={styles.panelDesc}>{cell.description}</p>
                      <span className={styles.panelMetric}>
                        <strong>Stat:</strong> {cell.metric}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
};

export default BentoAccordion;
