import React from 'react';
import { cn } from '../../utils/cn';
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'feature' | 'bento' | 'pricing' | 'testimonial';
  highlighted?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  highlighted = false,
  className,
  ...props
}) => {
  const classes = cn(
    styles.card,
    styles[variant],
    highlighted && styles.highlighted,
    className
  );
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
