import React from 'react';
import { contentConfig } from '../../config/content';
import { Container } from '../primitives/Container';
import { Button } from '../primitives/Button';
import { Icon } from '../primitives/Icon';
import styles from './FinalCTA.module.css';

export const FinalCTA: React.FC = () => {
  const { cta } = contentConfig;
  
  return (
    <section id="cta" className={styles.section} aria-labelledby="cta-title">
      <Container>
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <h2 id="cta-title" className={styles.title}>{cta.title}</h2>
            
            <div className={styles.actionWrap}>
              <Button as="a" href="#pricing" variant="primary" className={styles.ctaButton}>
                {cta.primaryCTA}
              </Button>
              <p className={styles.frictionText}>{cta.frictionReducer}</p>
            </div>
            
            {/* Trust Badge Strip */}
            <div className={styles.trustStrip} role="list" aria-label="Trust and compliance badges">
              {cta.trustBadges.map((badge, idx) => {
                const getIconName = (name: string) => {
                  switch (name) {
                    case 'shield': return 'LinkSolidIcon'; // mapping to our actual generated icons
                    case 'lock': return 'CubeIcon';
                    case 'link': return 'LinkIcon';
                    case 'arrow-path': return 'ArrowPathIcon';
                    case 'cube': return 'CubeIcon';
                    default: return 'CubeIcon';
                  }
                };
                
                return (
                  <React.Fragment key={idx}>
                    <div className={styles.trustItem} role="listitem">
                      <Icon name={getIconName(badge.icon)} className={styles.trustIcon} />
                      <span className={styles.trustLabel}>{badge.label}</span>
                    </div>
                    {idx < cta.trustBadges.length - 1 && (
                      <span className={styles.separator} aria-hidden="true">|</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTA;
