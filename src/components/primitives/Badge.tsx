import React from 'react';
import { cn } from '../../utils/cn';
import styles from './Badge.module.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const Badge: React.FC<BadgeProps> = ({ children, className, ...props }) => {
  return (
    <span className={cn(styles.badge, className)} {...props}>
      {children}
    </span>
  );
};

export default Badge;
