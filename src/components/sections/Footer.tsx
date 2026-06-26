import React from 'react';
import { contentConfig } from '../../config/content';
import { Container } from '../primitives/Container';
import { CubeIcon } from '../icons';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { footer } = contentConfig;
  
  return (
    <footer className={styles.footer} aria-label="Page Footer">
      <Container className={styles.container}>
        {/* Brand column */}
        <div className={styles.brandCol}>
          <div className={styles.logoWrap}>
            <CubeIcon className={styles.logoIcon} />
            <span className={styles.logoText}>{contentConfig.navbar.logo}</span>
          </div>
          <p className={styles.tagline}>{footer.tagline}</p>
          <span className={styles.copyright}>{footer.copyright}</span>
        </div>
        
        {/* Links columns */}
        <div className={styles.linksGrid}>
          {footer.links.map((col, idx) => (
            <div key={idx} className={styles.linkCol}>
              <h4 className={styles.colTitle}>{col.title}</h4>
              <ul className={styles.linkList}>
                {col.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a href={item.href} className={styles.link}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
