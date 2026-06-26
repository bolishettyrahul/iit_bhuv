import React from 'react';
import { cn } from '../../utils/cn';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  as?: 'button' | 'a';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  as = 'button',
  href,
  ...props
}) => {
  const classes = cn(styles.btn, styles[variant], className);
  
  if (as === 'a') {
    return (
      <a href={href} className={classes} {...(props as any)}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
export default Button;
