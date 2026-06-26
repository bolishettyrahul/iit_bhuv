import React from 'react';
import { contentConfig } from '../../config/content';
import { Container } from '../primitives/Container';
import { Badge } from '../primitives/Badge';
import { Card } from '../primitives/Card';
import styles from './Testimonials.module.css';

export const Testimonials: React.FC = () => {
  const { testimonials } = contentConfig;
  
  return (
    <section id="testimonials" className={styles.section} aria-labelledby="testimonials-title">
      <Container>
        <div className={styles.headerBlock}>
          <div className={styles.badgeWrapper}>
            <Badge>{testimonials.badge}</Badge>
          </div>
          <h2 id="testimonials-title" className={styles.title}>{testimonials.title}</h2>
          <p className={styles.description}>{testimonials.description}</p>
        </div>
        
        {/* Testimonials Masonry grid */}
        <div className={styles.testimonialGrid}>
          {testimonials.items.map((item, idx) => (
            <Card key={idx} variant="testimonial" className={styles.testimonialCard}>
              <div className={styles.cardContent}>
                <p className={styles.quoteText}>{item.quote}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.authorMeta}>
                    <span className={styles.authorName}>{item.author}</span>
                    <span className={styles.authorRole}>{item.role}</span>
                  </div>
                  <span className={styles.metricVal}>{item.metric}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
