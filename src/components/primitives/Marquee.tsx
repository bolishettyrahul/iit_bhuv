import React from 'react';
import { cn } from '../../utils/cn';
import styles from './Marquee.module.css';

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: 'slow' | 'medium' | 'fast';
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 'medium',
  direction = 'left',
  pauseOnHover = true,
  className,
  ...props
}) => {
  const containerClasses = cn(
    styles.marqueeContainer,
    pauseOnHover && styles.pauseOnHover,
    className
  );

  const trackClasses = cn(
    styles.marqueeTrack,
    styles[speed],
    styles[direction]
  );

  return (
    <div className={containerClasses} {...props}>
      <div className={trackClasses}>
        {/* Render children three times for seamless looping coverage on wide viewports */}
        <div className={styles.marqueeContent}>{children}</div>
        <div className={styles.marqueeContent} aria-hidden="true">{children}</div>
        <div className={styles.marqueeContent} aria-hidden="true">{children}</div>
      </div>
    </div>
  );
};

export default Marquee;
