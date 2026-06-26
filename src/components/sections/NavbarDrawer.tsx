'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './NavbarDrawer.module.css';
import { XMarkIcon } from '../icons';

interface LinkItem {
  label: string;
  href: string;
}

interface NavbarDrawerProps {
  links: LinkItem[];
}

export const NavbarDrawer: React.FC<NavbarDrawerProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className={styles.wrapper}>
      <button
        ref={toggleButtonRef}
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-drawer"
        aria-label="Toggle Mobile Menu"
      >
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
      </button>

      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-menu-drawer"
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.drawerHeader}>
          <span className={styles.drawerTitle}>Menu</span>
          <button
            ref={closeButtonRef}
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
            aria-label="Close Mobile Menu"
          >
            <XMarkIcon className={styles.closeIcon} />
          </button>
        </div>
        <nav className={styles.mobileNav} aria-label="Mobile Navigation">
          <ul className={styles.mobileNavList}>
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#pricing"
                className={styles.mobileNavCTA}
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavbarDrawer;
