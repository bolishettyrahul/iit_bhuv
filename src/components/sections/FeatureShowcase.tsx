import React from 'react';
import { contentConfig } from '../../config/content';
import { Container } from '../primitives/Container';
import { Badge } from '../primitives/Badge';
import { Card } from '../primitives/Card';
import { CogIcon, ChartPieIcon } from '../icons';
import styles from './FeatureShowcase.module.css';

export const FeatureShowcase: React.FC = () => {
  const { features } = contentConfig;
  
  return (
    <section id="features" className={styles.section} aria-labelledby="features-title">
      <Container>
        <div className={styles.headerBlock}>
          <div className={styles.badgeWrapper}>
            <Badge>{features.badge}</Badge>
          </div>
          <h2 id="features-title" className={styles.title}>{features.title}</h2>
          <p className={styles.description}>{features.description}</p>
        </div>
        
        {/* Feature showcase list */}
        <div className={styles.featureList}>
          {features.items.map((item, idx) => {
            const IconComponent = idx === 0 ? CogIcon : ChartPieIcon;
            
            return (
              <Card key={idx} variant="feature" className={styles.featureCard}>
                <div className={styles.cardLayout}>
                  <div className={styles.iconColumn}>
                    <div className={styles.iconWrap}>
                      <IconComponent />
                    </div>
                  </div>
                  <div className={styles.contentColumn}>
                    <div className={styles.metaRow}>
                      <span className={styles.featureBadge}>{item.badge}</span>
                      <span className={styles.metricVal}>{item.metric}</span>
                    </div>
                    <h3 className={styles.featureTitle}>{item.title}</h3>
                    <p className={styles.featureDesc}>{item.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FeatureShowcase;
