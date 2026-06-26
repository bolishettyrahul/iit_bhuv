import React from 'react';
import { contentConfig } from '../../config/content';
import { Container } from '../primitives/Container';
import styles from './Navbar.module.css';
import { CubeIcon } from '../icons';
import NavbarDrawer from './NavbarDrawer';

export const Navbar: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container clean={true} className={styles.navContainer}>
        <a href="#" className={styles.logoWrap}>
          <CubeIcon className={styles.logoIcon} />
          <span className={styles.logoText}>{contentConfig.navbar.logo}</span>
        </a>
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {contentConfig.navbar.links.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actionWrap}>
          <a href="#pricing" className={styles.navCTA}>
            Get Started
          </a>
          <NavbarDrawer links={contentConfig.navbar.links} />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
