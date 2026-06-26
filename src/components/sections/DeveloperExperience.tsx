import React from 'react';
import { contentConfig } from '../../config/content';
import { Container } from '../primitives/Container';
import { Badge } from '../primitives/Badge';
import CodeTerminal from './CodeTerminal';
import styles from './DeveloperExperience.module.css';

export const DeveloperExperience: React.FC = () => {
  const { dx } = contentConfig;
  
  return (
    <section id="dx" className={styles.section} aria-labelledby="dx-title">
      <Container className={styles.container}>
        {/* Left Side: Code Editor Preview */}
        <div className={styles.visualBlock}>
          <CodeTerminal cliCommand={dx.cliCommand} codePreview={dx.codePreview} />
        </div>
        
        {/* Right Side: Options & Details */}
        <div className={styles.textBlock}>
          <div className={styles.badgeWrapper}>
            <Badge>{dx.badge}</Badge>
          </div>
          <h2 id="dx-title" className={styles.title}>{dx.title}</h2>
          <p className={styles.description}>{dx.description}</p>
          
          <div className={styles.optionsList}>
            {dx.items.map((item, idx) => (
              <div key={idx} className={styles.optionItem}>
                <h3 className={styles.optionLabel}>{item.label}</h3>
                <p className={styles.optionDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DeveloperExperience;
